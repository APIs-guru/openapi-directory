import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalPostMetrics } from "./localpostmetrics";



// ReportLocalPostInsightsResponse
/** 
 * Response message for Insights.ReportLocalPostInsights
**/
export class ReportLocalPostInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localPostMetrics", elemType: LocalPostMetrics })
  localPostMetrics?: LocalPostMetrics[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
