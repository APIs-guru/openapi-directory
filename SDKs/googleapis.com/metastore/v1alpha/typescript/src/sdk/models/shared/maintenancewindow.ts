import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MaintenanceWindowDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// MaintenanceWindow
/** 
 * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: MaintenanceWindowDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=hourOfDay" })
  hourOfDay?: number;
}
