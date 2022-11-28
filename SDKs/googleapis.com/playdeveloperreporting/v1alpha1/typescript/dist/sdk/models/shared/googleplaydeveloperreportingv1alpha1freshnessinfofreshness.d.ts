import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDateTime } from "./googletypedatetime";
export declare enum GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * Information about data freshness for a single aggregation period.
**/
export declare class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness extends SpeakeasyBase {
    aggregationPeriod?: GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum;
    latestEndTime?: GoogleTypeDateTime;
}
