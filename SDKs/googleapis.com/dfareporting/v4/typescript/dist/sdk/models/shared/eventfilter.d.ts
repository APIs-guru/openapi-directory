import { SpeakeasyBase } from "../../../internal/utils";
import { PathReportDimensionValue } from "./pathreportdimensionvalue";
import { UvarFilter } from "./uvarfilter";
/**
 * Represents a DfaReporting event filter.
**/
export declare class EventFilter extends SpeakeasyBase {
    dimensionFilter?: PathReportDimensionValue;
    kind?: string;
    uvarFilter?: UvarFilter;
}
