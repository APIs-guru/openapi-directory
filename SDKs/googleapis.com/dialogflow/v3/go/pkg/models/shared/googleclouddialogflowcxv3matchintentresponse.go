package shared



type GoogleCloudDialogflowCxV3MatchIntentResponse struct {
    CurrentPage *GoogleCloudDialogflowCxV3Page `json:"currentPage,omitempty"`
    Matches []GoogleCloudDialogflowCxV3Match `json:"matches,omitempty"`
    Text *string `json:"text,omitempty"`
    Transcript *string `json:"transcript,omitempty"`
    TriggerEvent *string `json:"triggerEvent,omitempty"`
    TriggerIntent *string `json:"triggerIntent,omitempty"`
    
}

