package shared

// GooglePlayDeveloperReportingV1beta1FreshnessInfo
// Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
type GooglePlayDeveloperReportingV1beta1FreshnessInfo struct {
	Freshnesses []GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness `json:"freshnesses,omitempty"`
}
