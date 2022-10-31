package shared




type GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum string

const (
    GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumHourly GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = "HOURLY"
GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumDaily GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = "DAILY"
)


type GooglePlayDeveloperReportingV1beta1TimelineSpec struct {
    AggregationPeriod *GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum `json:"aggregationPeriod,omitempty"`
    EndTime *GoogleTypeDateTime `json:"endTime,omitempty"`
    StartTime *GoogleTypeDateTime `json:"startTime,omitempty"`
    
}

