import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DailyMaintenanceWindow } from "./dailymaintenancewindow";
import { TimeWindow } from "./timewindow";
import { RecurringTimeWindow } from "./recurringtimewindow";



// MaintenanceWindow
/** 
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyMaintenanceWindow" })
  dailyMaintenanceWindow?: DailyMaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=maintenanceExclusions", elemType: TimeWindow })
  maintenanceExclusions?: Map<string, TimeWindow>;

  @SpeakeasyMetadata({ data: "json, name=recurringWindow" })
  recurringWindow?: RecurringTimeWindow;
}
