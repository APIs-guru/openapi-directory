import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=actors", elemType: shared.Actor })
  actors?: Actor[];

  @Metadata({ data: "json, name=primaryActionDetail" })
  primaryActionDetail?: ActionDetail;

  @Metadata({ data: "json, name=targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
