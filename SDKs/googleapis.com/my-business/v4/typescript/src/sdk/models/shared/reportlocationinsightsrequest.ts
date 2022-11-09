import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";
import { DrivingDirectionMetricsRequest } from "./drivingdirectionmetricsrequest";


// ReportLocationInsightsRequest
/** 
 * Request message for Insights.ReportLocationInsights.
**/
export class ReportLocationInsightsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicRequest" })
  basicRequest?: BasicMetricsRequest;

  @Metadata({ data: "json, name=drivingDirectionsRequest" })
  drivingDirectionsRequest?: DrivingDirectionMetricsRequest;

  @Metadata({ data: "json, name=locationNames" })
  locationNames?: string[];
}
