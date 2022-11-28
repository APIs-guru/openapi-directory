package shared

type GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum string

const (
	GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumAggregationPeriodUnspecified GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = "AGGREGATION_PERIOD_UNSPECIFIED"
	GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumHourly                       GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = "HOURLY"
	GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumDaily                        GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum = "DAILY"
)

// GooglePlayDeveloperReportingV1beta1TimelineSpec
// Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query.
type GooglePlayDeveloperReportingV1beta1TimelineSpec struct {
	AggregationPeriod *GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum `json:"aggregationPeriod,omitempty"`
	EndTime           *GoogleTypeDateTime                                                   `json:"endTime,omitempty"`
	StartTime         *GoogleTypeDateTime                                                   `json:"startTime,omitempty"`
}
