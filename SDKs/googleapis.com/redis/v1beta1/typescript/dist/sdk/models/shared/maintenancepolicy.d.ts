import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";
/**
 * Maintenance policy for an instance.
**/
export declare class MaintenancePolicy extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    updateTime?: string;
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
