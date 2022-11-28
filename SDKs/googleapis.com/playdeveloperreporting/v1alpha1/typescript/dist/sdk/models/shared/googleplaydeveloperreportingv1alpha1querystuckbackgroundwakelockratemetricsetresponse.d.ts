import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1MetricsRow } from "./googleplaydeveloperreportingv1alpha1metricsrow";
/**
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export declare class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rows?: GooglePlayDeveloperReportingV1alpha1MetricsRow[];
}
