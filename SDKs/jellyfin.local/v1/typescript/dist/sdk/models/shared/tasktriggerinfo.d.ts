import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
/**
 * Class TaskTriggerInfo.
**/
export declare class TaskTriggerInfo extends SpeakeasyBase {
    dayOfWeek?: DayOfWeekEnum;
    intervalTicks?: number;
    maxRuntimeTicks?: number;
    timeOfDayTicks?: number;
    type?: string;
}
