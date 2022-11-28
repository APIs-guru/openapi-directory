import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1MetricsRow } from "./googleplaydeveloperreportingv1beta1metricsrow";



// GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse
/** 
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GooglePlayDeveloperReportingV1beta1MetricsRow })
  rows?: GooglePlayDeveloperReportingV1beta1MetricsRow[];
}
