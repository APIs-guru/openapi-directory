import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MaintenanceWindowDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}


// MaintenanceWindow
/** 
 * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: MaintenanceWindowDayOfWeekEnum;

  @Metadata({ data: "json, name=hourOfDay" })
  hourOfDay?: number;
}
