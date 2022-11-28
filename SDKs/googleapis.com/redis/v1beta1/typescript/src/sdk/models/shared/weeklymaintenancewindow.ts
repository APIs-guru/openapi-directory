import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";


export enum WeeklyMaintenanceWindowDayEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// WeeklyMaintenanceWindow
/** 
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
**/
export class WeeklyMaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: WeeklyMaintenanceWindowDayEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}


// WeeklyMaintenanceWindowInput
/** 
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
**/
export class WeeklyMaintenanceWindowInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: WeeklyMaintenanceWindowDayEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
