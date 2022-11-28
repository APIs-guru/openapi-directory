import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";


export enum DataSourceRefreshWeeklyScheduleDaysOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// DataSourceRefreshWeeklySchedule
/** 
 * A weekly schedule for data to refresh on specific days in a given time interval.
**/
export class DataSourceRefreshWeeklySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daysOfWeek" })
  daysOfWeek?: DataSourceRefreshWeeklyScheduleDaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: TimeOfDay;
}
