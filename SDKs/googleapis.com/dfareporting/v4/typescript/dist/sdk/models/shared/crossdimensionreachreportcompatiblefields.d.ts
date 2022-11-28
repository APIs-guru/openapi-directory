import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
**/
export declare class CrossDimensionReachReportCompatibleFields extends SpeakeasyBase {
    breakdown?: Dimension[];
    dimensionFilters?: Dimension[];
    kind?: string;
    metrics?: Metric[];
    overlapMetrics?: Metric[];
}
