import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompensationHistogramResult } from "./compensationhistogramresult";
import { CustomAttributeHistogramResult } from "./customattributehistogramresult";
import { HistogramResult } from "./histogramresult";


// HistogramResults
/** 
 * Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
**/
export class HistogramResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=compensationHistogramResults", elemType: shared.CompensationHistogramResult })
  compensationHistogramResults?: CompensationHistogramResult[];

  @Metadata({ data: "json, name=customAttributeHistogramResults", elemType: shared.CustomAttributeHistogramResult })
  customAttributeHistogramResults?: CustomAttributeHistogramResult[];

  @Metadata({ data: "json, name=simpleHistogramResults", elemType: shared.HistogramResult })
  simpleHistogramResults?: HistogramResult[];
}
