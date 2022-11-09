import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeOfDay } from "./timeofday";
import { Date } from "./date";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";


// Schedule
/** 
 * Transfers can be scheduled to recur or to run just once.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeOfDay" })
  endTimeOfDay?: TimeOfDay;

  @Metadata({ data: "json, name=repeatInterval" })
  repeatInterval?: string;

  @Metadata({ data: "json, name=scheduleEndDate" })
  scheduleEndDate?: Date;

  @Metadata({ data: "json, name=scheduleStartDate" })
  scheduleStartDate?: Date;

  @Metadata({ data: "json, name=startTimeOfDay" })
  startTimeOfDay?: TimeOfDay;
}
