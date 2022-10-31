package shared



type GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest struct {
    Dimensions []string `json:"dimensions,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Metrics []string `json:"metrics,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    TimelineSpec *GooglePlayDeveloperReportingV1beta1TimelineSpec `json:"timelineSpec,omitempty"`
    
}

