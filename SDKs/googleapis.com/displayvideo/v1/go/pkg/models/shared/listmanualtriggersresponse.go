package shared

type ListManualTriggersResponse struct {
	ManualTriggers []ManualTrigger `json:"manualTriggers,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
