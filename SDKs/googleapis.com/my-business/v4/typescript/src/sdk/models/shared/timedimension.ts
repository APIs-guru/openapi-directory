import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { TimeRange } from "./timerange";


export enum TimeDimensionDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// TimeDimension
/** 
 * The dimension for which data is divided over.
**/
export class TimeDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: TimeDimensionDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=timeOfDay" })
  timeOfDay?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;
}
