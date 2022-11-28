import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";



// TaskTriggerInfo
/** 
 * Class TaskTriggerInfo.
**/
export class TaskTriggerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DayOfWeek" })
  dayOfWeek?: DayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=IntervalTicks" })
  intervalTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxRuntimeTicks" })
  maxRuntimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeOfDayTicks" })
  timeOfDayTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
