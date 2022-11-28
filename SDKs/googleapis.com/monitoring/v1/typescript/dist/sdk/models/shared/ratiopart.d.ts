import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
/**
 * Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
**/
export declare class RatioPart extends SpeakeasyBase {
    aggregation?: Aggregation;
    filter?: string;
}
