import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Actor } from "./actor";
import { ActionDetail } from "./actiondetail";
import { Target } from "./target";
import { TimeRange } from "./timerange";


// Action
/** 
 * Information about the action.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: Actor;

  @Metadata({ data: "json, name=detail" })
  detail?: ActionDetail;

  @Metadata({ data: "json, name=target" })
  target?: Target;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
