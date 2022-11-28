import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Actor } from "./actor";
import { ActionDetail } from "./actiondetail";
import { Target } from "./target";
import { TimeRange } from "./timerange";



// DriveActivity
/** 
 * A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
**/
export class DriveActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=actors", elemType: Actor })
  actors?: Actor[];

  @SpeakeasyMetadata({ data: "json, name=primaryActionDetail" })
  primaryActionDetail?: ActionDetail;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
