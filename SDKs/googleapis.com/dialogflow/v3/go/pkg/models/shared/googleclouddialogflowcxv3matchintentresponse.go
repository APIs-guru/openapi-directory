package shared

type GoogleCloudDialogflowCxV3MatchIntentResponse struct {
	CurrentPage   *GoogleCloudDialogflowCxV3Page   `json:"currentPage"`
	Matches       []GoogleCloudDialogflowCxV3Match `json:"matches"`
	Text          *string                          `json:"text"`
	Transcript    *string                          `json:"transcript"`
	TriggerEvent  *string                          `json:"triggerEvent"`
	TriggerIntent *string                          `json:"triggerIntent"`
}
