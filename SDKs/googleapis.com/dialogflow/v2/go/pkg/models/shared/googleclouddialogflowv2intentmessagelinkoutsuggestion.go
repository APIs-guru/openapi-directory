package shared

// GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion
// The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
type GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion struct {
	DestinationName *string `json:"destinationName,omitempty"`
	URI             *string `json:"uri,omitempty"`
}
