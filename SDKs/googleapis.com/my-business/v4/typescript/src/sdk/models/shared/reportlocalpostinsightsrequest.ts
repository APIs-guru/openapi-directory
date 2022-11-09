import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";


// ReportLocalPostInsightsRequest
/** 
 * Request message for Insights.ReportLocalPostInsights
**/
export class ReportLocalPostInsightsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicRequest" })
  basicRequest?: BasicMetricsRequest;

  @Metadata({ data: "json, name=localPostNames" })
  localPostNames?: string[];
}
