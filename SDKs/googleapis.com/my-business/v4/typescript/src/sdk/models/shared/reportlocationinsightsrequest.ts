import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";
import { DrivingDirectionMetricsRequest } from "./drivingdirectionmetricsrequest";



// ReportLocationInsightsRequest
/** 
 * Request message for Insights.ReportLocationInsights.
**/
export class ReportLocationInsightsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicRequest" })
  basicRequest?: BasicMetricsRequest;

  @SpeakeasyMetadata({ data: "json, name=drivingDirectionsRequest" })
  drivingDirectionsRequest?: DrivingDirectionMetricsRequest;

  @SpeakeasyMetadata({ data: "json, name=locationNames" })
  locationNames?: string[];
}
