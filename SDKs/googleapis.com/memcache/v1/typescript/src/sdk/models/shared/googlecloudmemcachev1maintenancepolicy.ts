import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";



// GoogleCloudMemcacheV1MaintenancePolicyInput
/** 
 * Maintenance policy per instance.
**/
export class GoogleCloudMemcacheV1MaintenancePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=weeklyMaintenanceWindow", elemType: WeeklyMaintenanceWindow })
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}


// GoogleCloudMemcacheV1MaintenancePolicy
/** 
 * Maintenance policy per instance.
**/
export class GoogleCloudMemcacheV1MaintenancePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=weeklyMaintenanceWindow", elemType: WeeklyMaintenanceWindow })
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
