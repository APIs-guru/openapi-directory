import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Actor } from "./actor";
import { ActionDetail } from "./actiondetail";
import { Target } from "./target";
import { TimeRange } from "./timerange";
/**
 * A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
**/
export declare class DriveActivity extends SpeakeasyBase {
    actions?: Action[];
    actors?: Actor[];
    primaryActionDetail?: ActionDetail;
    targets?: Target[];
    timeRange?: TimeRange;
    timestamp?: string;
}
