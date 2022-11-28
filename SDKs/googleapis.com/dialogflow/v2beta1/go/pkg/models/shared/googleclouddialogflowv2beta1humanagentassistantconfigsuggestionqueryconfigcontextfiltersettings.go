package shared

// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings
// Settings that determine how to filter recent conversation context when generating suggestions.
type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings struct {
	DropHandoffMessages      *bool `json:"dropHandoffMessages,omitempty"`
	DropIvrMessages          *bool `json:"dropIvrMessages,omitempty"`
	DropVirtualAgentMessages *bool `json:"dropVirtualAgentMessages,omitempty"`
}
