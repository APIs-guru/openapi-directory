import { SpeakeasyBase } from "../../../internal/utils/utils";
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
