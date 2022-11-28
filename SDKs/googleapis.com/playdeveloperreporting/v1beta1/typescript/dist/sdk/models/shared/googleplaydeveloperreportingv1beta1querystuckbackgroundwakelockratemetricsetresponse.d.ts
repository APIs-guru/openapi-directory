import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1MetricsRow } from "./googleplaydeveloperreportingv1beta1metricsrow";
/**
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export declare class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rows?: GooglePlayDeveloperReportingV1beta1MetricsRow[];
}
