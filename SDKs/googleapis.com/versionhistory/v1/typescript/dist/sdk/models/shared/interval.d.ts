import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
**/
export declare class Interval extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
