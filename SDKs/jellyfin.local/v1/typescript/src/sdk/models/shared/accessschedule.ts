import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicDayOfWeekEnum } from "./dynamicdayofweekenum";


// AccessSchedule
/** 
 * An entity representing a user's access schedule.
**/
export class AccessSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=DayOfWeek" })
  dayOfWeek: DynamicDayOfWeekEnum;

  @Metadata({ data: "json, name=EndHour" })
  endHour: number;

  @Metadata({ data: "json, name=Id" })
  id: number;

  @Metadata({ data: "json, name=StartHour" })
  startHour: number;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}
