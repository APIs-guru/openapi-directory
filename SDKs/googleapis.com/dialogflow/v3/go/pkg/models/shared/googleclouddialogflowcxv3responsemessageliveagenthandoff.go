package shared

// GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff
// Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
type GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff struct {
	Metadata map[string]interface{} `json:"metadata,omitempty"`
}
