package shared

// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction
// Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
type GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction struct {
	Dial          *GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial    `json:"dial,omitempty"`
	OpenURL       *GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI `json:"openUrl,omitempty"`
	PostbackData  *string                                                                               `json:"postbackData,omitempty"`
	ShareLocation map[string]interface{}                                                                `json:"shareLocation,omitempty"`
	Text          *string                                                                               `json:"text,omitempty"`
}
