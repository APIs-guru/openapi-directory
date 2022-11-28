import { SpeakeasyBase } from "../../../internal/utils";
import { LocalPostMetrics } from "./localpostmetrics";
/**
 * Response message for Insights.ReportLocalPostInsights
**/
export declare class ReportLocalPostInsightsResponse extends SpeakeasyBase {
    localPostMetrics?: LocalPostMetrics[];
    name?: string;
    timeZone?: string;
}
