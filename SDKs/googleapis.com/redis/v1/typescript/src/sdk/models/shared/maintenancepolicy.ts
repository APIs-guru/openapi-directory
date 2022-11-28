import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeeklyMaintenanceWindowInput } from "./weeklymaintenancewindow";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";



// MaintenancePolicyInput
/** 
 * Maintenance policy for an instance.
**/
export class MaintenancePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=weeklyMaintenanceWindow", elemType: WeeklyMaintenanceWindowInput })
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindowInput[];
}


// MaintenancePolicy
/** 
 * Maintenance policy for an instance.
**/
export class MaintenancePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=weeklyMaintenanceWindow", elemType: WeeklyMaintenanceWindow })
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
