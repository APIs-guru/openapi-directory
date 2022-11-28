import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1MetricsRow } from "./googleplaydeveloperreportingv1alpha1metricsrow";



// GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse
/** 
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GooglePlayDeveloperReportingV1alpha1MetricsRow })
  rows?: GooglePlayDeveloperReportingV1alpha1MetricsRow[];
}
