package shared

// GoogleCloudDialogflowCxV3beta1MatchIntentResponse
// Response of MatchIntent.
type GoogleCloudDialogflowCxV3beta1MatchIntentResponse struct {
	CurrentPage   *GoogleCloudDialogflowCxV3beta1Page   `json:"currentPage,omitempty"`
	Matches       []GoogleCloudDialogflowCxV3beta1Match `json:"matches,omitempty"`
	Text          *string                               `json:"text,omitempty"`
	Transcript    *string                               `json:"transcript,omitempty"`
	TriggerEvent  *string                               `json:"triggerEvent,omitempty"`
	TriggerIntent *string                               `json:"triggerIntent,omitempty"`
}
