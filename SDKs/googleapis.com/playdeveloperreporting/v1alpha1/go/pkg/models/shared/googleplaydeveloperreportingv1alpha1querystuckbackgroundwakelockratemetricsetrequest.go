package shared

type GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest struct {
	Dimensions   []string                                          `json:"dimensions"`
	Filter       *string                                           `json:"filter"`
	Metrics      []string                                          `json:"metrics"`
	PageSize     *int32                                            `json:"pageSize"`
	PageToken    *string                                           `json:"pageToken"`
	TimelineSpec *GooglePlayDeveloperReportingV1alpha1TimelineSpec `json:"timelineSpec"`
}
