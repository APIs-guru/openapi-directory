import { SpeakeasyBase } from "../../../internal/utils";
import { DailyMaintenanceWindow } from "./dailymaintenancewindow";
import { TimeWindow } from "./timewindow";
import { RecurringTimeWindow } from "./recurringtimewindow";
/**
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
**/
export declare class MaintenanceWindow extends SpeakeasyBase {
    dailyMaintenanceWindow?: DailyMaintenanceWindow;
    maintenanceExclusions?: Map<string, TimeWindow>;
    recurringWindow?: RecurringTimeWindow;
}
