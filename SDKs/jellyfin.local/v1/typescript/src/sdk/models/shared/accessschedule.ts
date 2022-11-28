import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicDayOfWeekEnum } from "./dynamicdayofweekenum";



// AccessSchedule
/** 
 * An entity representing a user's access schedule.
**/
export class AccessSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DayOfWeek" })
  dayOfWeek: DynamicDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=EndHour" })
  endHour: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=StartHour" })
  startHour: number;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;
}


// AccessScheduleInput
/** 
 * An entity representing a user's access schedule.
**/
export class AccessScheduleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DayOfWeek" })
  dayOfWeek: DynamicDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=EndHour" })
  endHour: number;

  @SpeakeasyMetadata({ data: "json, name=StartHour" })
  startHour: number;
}
