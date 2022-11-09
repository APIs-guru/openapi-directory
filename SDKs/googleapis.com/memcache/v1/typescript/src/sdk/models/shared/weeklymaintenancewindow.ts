import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeOfDay } from "./timeofday";

export enum WeeklyMaintenanceWindowDayEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}


// WeeklyMaintenanceWindow
/** 
 * Time window specified for weekly operations.
**/
export class WeeklyMaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: WeeklyMaintenanceWindowDayEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
