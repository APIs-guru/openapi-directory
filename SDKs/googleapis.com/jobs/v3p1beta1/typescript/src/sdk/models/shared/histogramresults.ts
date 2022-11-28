import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompensationHistogramResult } from "./compensationhistogramresult";
import { CustomAttributeHistogramResult } from "./customattributehistogramresult";
import { HistogramResult } from "./histogramresult";



// HistogramResults
/** 
 * Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
**/
export class HistogramResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compensationHistogramResults", elemType: CompensationHistogramResult })
  compensationHistogramResults?: CompensationHistogramResult[];

  @SpeakeasyMetadata({ data: "json, name=customAttributeHistogramResults", elemType: CustomAttributeHistogramResult })
  customAttributeHistogramResults?: CustomAttributeHistogramResult[];

  @SpeakeasyMetadata({ data: "json, name=simpleHistogramResults", elemType: HistogramResult })
  simpleHistogramResults?: HistogramResult[];
}
