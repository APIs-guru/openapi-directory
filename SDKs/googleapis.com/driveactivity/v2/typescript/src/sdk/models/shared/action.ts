import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { ActionDetail } from "./actiondetail";
import { Target } from "./target";
import { TimeRange } from "./timerange";



// Action
/** 
 * Information about the action.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: Actor;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: ActionDetail;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: Target;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
