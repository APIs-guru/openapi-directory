package shared

// GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest
// Request message for QueryStuckBackgroundWakelockRateMetricSet.
type GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest struct {
	Dimensions   []string                                          `json:"dimensions,omitempty"`
	Filter       *string                                           `json:"filter,omitempty"`
	Metrics      []string                                          `json:"metrics,omitempty"`
	PageSize     *int32                                            `json:"pageSize,omitempty"`
	PageToken    *string                                           `json:"pageToken,omitempty"`
	TimelineSpec *GooglePlayDeveloperReportingV1alpha1TimelineSpec `json:"timelineSpec,omitempty"`
}
