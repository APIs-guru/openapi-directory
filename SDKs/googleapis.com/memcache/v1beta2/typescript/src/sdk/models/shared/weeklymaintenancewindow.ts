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
 * Time window specified for weekly operations.
**/
export class WeeklyMaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: WeeklyMaintenanceWindowDayEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
