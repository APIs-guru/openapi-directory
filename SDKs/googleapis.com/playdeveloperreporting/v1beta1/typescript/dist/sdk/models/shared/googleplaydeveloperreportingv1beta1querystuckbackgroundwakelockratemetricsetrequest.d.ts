import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1TimelineSpec } from "./googleplaydeveloperreportingv1beta1timelinespec";
/**
 * Request message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export declare class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest extends SpeakeasyBase {
    dimensions?: string[];
    filter?: string;
    metrics?: string[];
    pageSize?: number;
    pageToken?: string;
    timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;
}
