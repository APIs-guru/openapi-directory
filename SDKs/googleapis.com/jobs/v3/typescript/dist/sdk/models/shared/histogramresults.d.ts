import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationHistogramResult } from "./compensationhistogramresult";
import { CustomAttributeHistogramResult } from "./customattributehistogramresult";
import { HistogramResult } from "./histogramresult";
/**
 * Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
**/
export declare class HistogramResults extends SpeakeasyBase {
    compensationHistogramResults?: CompensationHistogramResult[];
    customAttributeHistogramResults?: CustomAttributeHistogramResult[];
    simpleHistogramResults?: HistogramResult[];
}
