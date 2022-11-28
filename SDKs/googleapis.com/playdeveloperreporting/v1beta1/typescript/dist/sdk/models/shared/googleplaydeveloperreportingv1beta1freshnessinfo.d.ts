import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness } from "./googleplaydeveloperreportingv1beta1freshnessinfofreshness";
/**
 * Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
**/
export declare class GooglePlayDeveloperReportingV1beta1FreshnessInfo extends SpeakeasyBase {
    freshnesses?: GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness[];
}
