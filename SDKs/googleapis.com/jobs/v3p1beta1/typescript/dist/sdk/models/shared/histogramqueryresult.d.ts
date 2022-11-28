import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Histogram result that matches HistogramSpec specified in searches.
**/
export declare class HistogramQueryResult extends SpeakeasyBase {
    histogram?: Map<string, string>;
    histogramQuery?: string;
}
