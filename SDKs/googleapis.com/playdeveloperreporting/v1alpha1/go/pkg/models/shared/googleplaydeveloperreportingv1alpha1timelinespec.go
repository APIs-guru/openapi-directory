package shared




type GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnum string

const (
    GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnumHourly GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnum = "HOURLY"
GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnumDaily GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnum = "DAILY"
)


type GooglePlayDeveloperReportingV1alpha1TimelineSpec struct {
    AggregationPeriod *GooglePlayDeveloperReportingV1alpha1TimelineSpecAggregationPeriodEnum `json:"aggregationPeriod,omitempty"`
    EndTime *GoogleTypeDateTime `json:"endTime,omitempty"`
    StartTime *GoogleTypeDateTime `json:"startTime,omitempty"`
    
}

