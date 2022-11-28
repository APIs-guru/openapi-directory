import { SpeakeasyBase } from "../../../internal/utils";
import { WeeklyMaintenanceWindowInput } from "./weeklymaintenancewindow";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";
/**
 * Maintenance policy for an instance.
**/
export declare class MaintenancePolicyInput extends SpeakeasyBase {
    description?: string;
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindowInput[];
}
/**
 * Maintenance policy for an instance.
**/
export declare class MaintenancePolicy extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    updateTime?: string;
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
