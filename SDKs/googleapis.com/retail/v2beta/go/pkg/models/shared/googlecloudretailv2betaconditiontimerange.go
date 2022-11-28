package shared

// GoogleCloudRetailV2betaConditionTimeRange
// Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
type GoogleCloudRetailV2betaConditionTimeRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
