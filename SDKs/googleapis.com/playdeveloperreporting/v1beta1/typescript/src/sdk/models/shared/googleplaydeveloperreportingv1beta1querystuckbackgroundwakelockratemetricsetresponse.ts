import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1beta1MetricsRow } from "./googleplaydeveloperreportingv1beta1metricsrow";


// GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse
/** 
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.GooglePlayDeveloperReportingV1beta1MetricsRow })
  rows?: GooglePlayDeveloperReportingV1beta1MetricsRow[];
}
