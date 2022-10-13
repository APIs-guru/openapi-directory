package shared

type GoogleCloudDialogflowCxV3beta1MatchIntentResponse struct {
	CurrentPage   *GoogleCloudDialogflowCxV3beta1Page   `json:"currentPage"`
	Matches       []GoogleCloudDialogflowCxV3beta1Match `json:"matches"`
	Text          *string                               `json:"text"`
	Transcript    *string                               `json:"transcript"`
	TriggerEvent  *string                               `json:"triggerEvent"`
	TriggerIntent *string                               `json:"triggerIntent"`
}
