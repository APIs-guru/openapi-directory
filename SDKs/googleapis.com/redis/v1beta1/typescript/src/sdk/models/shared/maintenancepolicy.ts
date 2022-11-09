import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";


// MaintenancePolicy
/** 
 * Maintenance policy for an instance.
**/
export class MaintenancePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=weeklyMaintenanceWindow", elemType: shared.WeeklyMaintenanceWindow })
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
