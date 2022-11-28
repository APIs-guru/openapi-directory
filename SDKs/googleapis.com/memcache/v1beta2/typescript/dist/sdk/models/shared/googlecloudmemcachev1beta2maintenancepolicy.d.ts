import { SpeakeasyBase } from "../../../internal/utils";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";
/**
 * Maintenance policy per instance.
**/
export declare class GoogleCloudMemcacheV1beta2MaintenancePolicy extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    updateTime?: string;
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
/**
 * Maintenance policy per instance.
**/
export declare class GoogleCloudMemcacheV1beta2MaintenancePolicyInput extends SpeakeasyBase {
    description?: string;
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
