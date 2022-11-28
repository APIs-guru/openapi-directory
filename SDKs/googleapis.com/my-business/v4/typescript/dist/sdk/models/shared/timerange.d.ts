import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
**/
export declare class TimeRange extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
