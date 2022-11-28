import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";



// ReportLocalPostInsightsRequest
/** 
 * Request message for Insights.ReportLocalPostInsights
**/
export class ReportLocalPostInsightsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicRequest" })
  basicRequest?: BasicMetricsRequest;

  @SpeakeasyMetadata({ data: "json, name=localPostNames" })
  localPostNames?: string[];
}
