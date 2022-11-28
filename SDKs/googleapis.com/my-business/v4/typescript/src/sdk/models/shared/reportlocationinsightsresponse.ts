import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationDrivingDirectionMetrics } from "./locationdrivingdirectionmetrics";
import { LocationMetrics } from "./locationmetrics";



// ReportLocationInsightsResponse
/** 
 * Response message for `Insights.ReportLocationInsights`.
**/
export class ReportLocationInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationDrivingDirectionMetrics", elemType: LocationDrivingDirectionMetrics })
  locationDrivingDirectionMetrics?: LocationDrivingDirectionMetrics[];

  @SpeakeasyMetadata({ data: "json, name=locationMetrics", elemType: LocationMetrics })
  locationMetrics?: LocationMetrics[];
}
