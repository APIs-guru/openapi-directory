import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1TimelineSpec } from "./googleplaydeveloperreportingv1alpha1timelinespec";
/**
 * Request message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export declare class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest extends SpeakeasyBase {
    dimensions?: string[];
    filter?: string;
    metrics?: string[];
    pageSize?: number;
    pageToken?: string;
    timelineSpec?: GooglePlayDeveloperReportingV1alpha1TimelineSpec;
}
