import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { Date } from "./date";



// Schedule
/** 
 * Transfers can be scheduled to recur or to run just once.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeOfDay" })
  endTimeOfDay?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=repeatInterval" })
  repeatInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndDate" })
  scheduleEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartDate" })
  scheduleStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTimeOfDay" })
  startTimeOfDay?: TimeOfDay;
}
