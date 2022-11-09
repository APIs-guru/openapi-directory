import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DailyMaintenanceWindow } from "./dailymaintenancewindow";
import { TimeWindow } from "./timewindow";
import { RecurringTimeWindow } from "./recurringtimewindow";


// MaintenanceWindow
/** 
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailyMaintenanceWindow" })
  dailyMaintenanceWindow?: DailyMaintenanceWindow;

  @Metadata({ data: "json, name=maintenanceExclusions", elemType: shared.TimeWindow })
  maintenanceExclusions?: Map<string, TimeWindow>;

  @Metadata({ data: "json, name=recurringWindow" })
  recurringWindow?: RecurringTimeWindow;
}
