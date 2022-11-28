import { SpeakeasyBase } from "../../../internal/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";
/**
 * Request message for Insights.ReportLocalPostInsights
**/
export declare class ReportLocalPostInsightsRequest extends SpeakeasyBase {
    basicRequest?: BasicMetricsRequest;
    localPostNames?: string[];
}
