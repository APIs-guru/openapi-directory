import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1alpha1MetricsRow } from "./googleplaydeveloperreportingv1alpha1metricsrow";


// GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse
/** 
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.GooglePlayDeveloperReportingV1alpha1MetricsRow })
  rows?: GooglePlayDeveloperReportingV1alpha1MetricsRow[];
}
