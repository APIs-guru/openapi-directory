package shared

type GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum string

const (
	GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
	GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnumHourly                       GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum = "HOURLY"
	GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnumDaily                        GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum = "DAILY"
)

// GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness
// Information about data freshness for a single aggregation period.
type GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness struct {
	AggregationPeriod *GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum `json:"aggregationPeriod,omitempty"`
	LatestEndTime     *GoogleTypeDateTime                                                              `json:"latestEndTime,omitempty"`
}
