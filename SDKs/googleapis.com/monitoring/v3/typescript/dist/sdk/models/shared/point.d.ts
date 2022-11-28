import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
import { TypedValue } from "./typedvalue";
/**
 * A single data point in a time series.
**/
export declare class Point extends SpeakeasyBase {
    interval?: TimeInterval;
    value?: TypedValue;
}
