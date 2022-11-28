import { SpeakeasyBase } from "../../../internal/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";
import { DrivingDirectionMetricsRequest } from "./drivingdirectionmetricsrequest";
/**
 * Request message for Insights.ReportLocationInsights.
**/
export declare class ReportLocationInsightsRequest extends SpeakeasyBase {
    basicRequest?: BasicMetricsRequest;
    drivingDirectionsRequest?: DrivingDirectionMetricsRequest;
    locationNames?: string[];
}
