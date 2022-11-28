package shared

// GoogleCloudRetailV2ConditionTimeRange
// Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
type GoogleCloudRetailV2ConditionTimeRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
