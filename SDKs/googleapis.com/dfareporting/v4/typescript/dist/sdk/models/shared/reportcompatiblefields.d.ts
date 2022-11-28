import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "STANDARD".
**/
export declare class ReportCompatibleFields extends SpeakeasyBase {
    dimensionFilters?: Dimension[];
    dimensions?: Dimension[];
    kind?: string;
    metrics?: Metric[];
    pivotedActivityMetrics?: Metric[];
}
