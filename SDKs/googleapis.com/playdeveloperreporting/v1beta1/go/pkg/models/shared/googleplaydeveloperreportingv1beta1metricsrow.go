package shared

type GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum string

const (
	GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
	GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnumHourly                       GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum = "HOURLY"
	GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnumDaily                        GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum = "DAILY"
)

type GooglePlayDeveloperReportingV1beta1MetricsRow struct {
	AggregationPeriod *GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum `json:"aggregationPeriod"`
	Dimensions        []GooglePlayDeveloperReportingV1beta1DimensionValue                 `json:"dimensions"`
	Metrics           []GooglePlayDeveloperReportingV1beta1MetricValue                    `json:"metrics"`
	StartTime         *GoogleTypeDateTime                                                 `json:"startTime"`
}
