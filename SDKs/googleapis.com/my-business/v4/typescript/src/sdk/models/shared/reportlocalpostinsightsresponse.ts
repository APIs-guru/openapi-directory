import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalPostMetrics } from "./localpostmetrics";


// ReportLocalPostInsightsResponse
/** 
 * Response message for Insights.ReportLocalPostInsights
**/
export class ReportLocalPostInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=localPostMetrics", elemType: shared.LocalPostMetrics })
  localPostMetrics?: LocalPostMetrics[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
