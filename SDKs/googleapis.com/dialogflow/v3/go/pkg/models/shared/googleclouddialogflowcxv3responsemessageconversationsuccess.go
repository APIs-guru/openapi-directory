package shared

// GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess
// Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
type GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess struct {
	Metadata map[string]interface{} `json:"metadata,omitempty"`
}
