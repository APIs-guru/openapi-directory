package shared

// GoogleCloudRetailV2alphaConditionTimeRange
// Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
type GoogleCloudRetailV2alphaConditionTimeRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
