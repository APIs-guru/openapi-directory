package shared

// GoogleCloudDialogflowCxV3beta1FulfillIntentRequest
// Request of FulfillIntent
type GoogleCloudDialogflowCxV3beta1FulfillIntentRequest struct {
	Match              *GoogleCloudDialogflowCxV3beta1Match              `json:"match,omitempty"`
	MatchIntentRequest *GoogleCloudDialogflowCxV3beta1MatchIntentRequest `json:"matchIntentRequest,omitempty"`
	OutputAudioConfig  *GoogleCloudDialogflowCxV3beta1OutputAudioConfig  `json:"outputAudioConfig,omitempty"`
}
