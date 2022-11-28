package shared

// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI
// Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.
type GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI struct {
	URI *string `json:"uri,omitempty"`
}
