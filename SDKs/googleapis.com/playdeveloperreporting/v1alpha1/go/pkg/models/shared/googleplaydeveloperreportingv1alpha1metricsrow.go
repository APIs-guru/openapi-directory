package shared

type GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum string

const (
	GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
	GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnumHourly                       GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum = "HOURLY"
	GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnumDaily                        GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum = "DAILY"
)

type GooglePlayDeveloperReportingV1alpha1MetricsRow struct {
	AggregationPeriod *GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum `json:"aggregationPeriod"`
	Dimensions        []GooglePlayDeveloperReportingV1alpha1DimensionValue                 `json:"dimensions"`
	Metrics           []GooglePlayDeveloperReportingV1alpha1MetricValue                    `json:"metrics"`
	StartTime         *GoogleTypeDateTime                                                  `json:"startTime"`
}
