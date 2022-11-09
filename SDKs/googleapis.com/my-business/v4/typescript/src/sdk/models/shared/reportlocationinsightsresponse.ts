import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationDrivingDirectionMetrics } from "./locationdrivingdirectionmetrics";
import { LocationMetrics } from "./locationmetrics";


// ReportLocationInsightsResponse
/** 
 * Response message for `Insights.ReportLocationInsights`.
**/
export class ReportLocationInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationDrivingDirectionMetrics", elemType: shared.LocationDrivingDirectionMetrics })
  locationDrivingDirectionMetrics?: LocationDrivingDirectionMetrics[];

  @Metadata({ data: "json, name=locationMetrics", elemType: shared.LocationMetrics })
  locationMetrics?: LocationMetrics[];
}
