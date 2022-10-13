package shared

type ListManualTriggersResponse struct {
	ManualTriggers []ManualTrigger `json:"manualTriggers"`
	NextPageToken  *string         `json:"nextPageToken"`
}
