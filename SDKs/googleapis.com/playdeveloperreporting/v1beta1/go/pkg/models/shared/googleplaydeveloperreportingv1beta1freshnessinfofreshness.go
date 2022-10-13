package shared

type GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum string

const (
	GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
	GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnumHourly                       GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum = "HOURLY"
	GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnumDaily                        GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum = "DAILY"
)

type GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness struct {
	AggregationPeriod *GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum `json:"aggregationPeriod"`
	LatestEndTime     *GoogleTypeDateTime                                                             `json:"latestEndTime"`
}
