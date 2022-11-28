package shared

// GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion
// The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
type GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion struct {
	DestinationName *string `json:"destinationName,omitempty"`
	URI             *string `json:"uri,omitempty"`
}
