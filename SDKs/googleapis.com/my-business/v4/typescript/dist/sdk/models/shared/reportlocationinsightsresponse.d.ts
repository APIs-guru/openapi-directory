import { SpeakeasyBase } from "../../../internal/utils";
import { LocationDrivingDirectionMetrics } from "./locationdrivingdirectionmetrics";
import { LocationMetrics } from "./locationmetrics";
/**
 * Response message for `Insights.ReportLocationInsights`.
**/
export declare class ReportLocationInsightsResponse extends SpeakeasyBase {
    locationDrivingDirectionMetrics?: LocationDrivingDirectionMetrics[];
    locationMetrics?: LocationMetrics[];
}
