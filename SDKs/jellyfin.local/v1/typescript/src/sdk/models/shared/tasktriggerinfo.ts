import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayOfWeekEnum } from "./dayofweekenum";


// TaskTriggerInfo
/** 
 * Class TaskTriggerInfo.
**/
export class TaskTriggerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=DayOfWeek" })
  dayOfWeek?: DayOfWeekEnum;

  @Metadata({ data: "json, name=IntervalTicks" })
  intervalTicks?: number;

  @Metadata({ data: "json, name=MaxRuntimeTicks" })
  maxRuntimeTicks?: number;

  @Metadata({ data: "json, name=TimeOfDayTicks" })
  timeOfDayTicks?: number;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
