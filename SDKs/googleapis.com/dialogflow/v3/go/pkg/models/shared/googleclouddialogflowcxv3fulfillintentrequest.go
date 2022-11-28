package shared

// GoogleCloudDialogflowCxV3FulfillIntentRequest
// Request of FulfillIntent
type GoogleCloudDialogflowCxV3FulfillIntentRequest struct {
	Match              *GoogleCloudDialogflowCxV3Match              `json:"match,omitempty"`
	MatchIntentRequest *GoogleCloudDialogflowCxV3MatchIntentRequest `json:"matchIntentRequest,omitempty"`
	OutputAudioConfig  *GoogleCloudDialogflowCxV3OutputAudioConfig  `json:"outputAudioConfig,omitempty"`
}
