import { SpeakeasyBase } from "../../../internal/utils";
import { Bin } from "./bin";
import { Percentiles } from "./percentiles";
/**
 * A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.
**/
export declare class Metric extends SpeakeasyBase {
    histogram?: Bin[];
    percentiles?: Percentiles;
}
