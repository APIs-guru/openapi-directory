package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction struct {
	Dial          *GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial    `json:"dial"`
	OpenURL       *GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI `json:"openUrl"`
	PostbackData  *string                                                                               `json:"postbackData"`
	ShareLocation map[string]interface{}                                                                `json:"shareLocation"`
	Text          *string                                                                               `json:"text"`
}
