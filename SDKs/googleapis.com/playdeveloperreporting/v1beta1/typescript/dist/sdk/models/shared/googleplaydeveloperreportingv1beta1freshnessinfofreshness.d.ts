import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDateTime } from "./googletypedatetime";
export declare enum GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * Information about data freshness for a single aggregation period.
**/
export declare class GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness extends SpeakeasyBase {
    aggregationPeriod?: GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum;
    latestEndTime?: GoogleTypeDateTime;
}
