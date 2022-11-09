import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
/**
 * Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.
**/
export declare class DatedValue extends SpeakeasyBase {
    date?: Date;
    value?: string;
}
