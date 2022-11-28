import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";
/**
 * An interval of time, inclusive. It must contain all fields to be valid.
**/
export declare class TimeInterval extends SpeakeasyBase {
    endDate?: Date;
    endTime?: TimeOfDay;
    startDate?: Date;
    startTime?: TimeOfDay;
}
