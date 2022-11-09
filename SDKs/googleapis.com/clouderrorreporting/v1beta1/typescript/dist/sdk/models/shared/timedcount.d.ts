import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.
**/
export declare class TimedCount extends SpeakeasyBase {
    count?: string;
    endTime?: string;
    startTime?: string;
}
