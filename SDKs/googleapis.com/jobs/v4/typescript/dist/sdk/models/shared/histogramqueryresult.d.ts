import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Histogram result that matches HistogramQuery specified in searches.
**/
export declare class HistogramQueryResult extends SpeakeasyBase {
    histogram?: Map<string, string>;
    histogramQuery?: string;
}
