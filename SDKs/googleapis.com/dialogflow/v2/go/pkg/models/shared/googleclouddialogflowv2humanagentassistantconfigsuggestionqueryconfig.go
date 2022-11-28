package shared

// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig
// Config for suggestion query.
type GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig struct {
	ConfidenceThreshold      *float32                                                                                       `json:"confidenceThreshold,omitempty"`
	ContextFilterSettings    *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings    `json:"contextFilterSettings,omitempty"`
	DialogflowQuerySource    *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource    `json:"dialogflowQuerySource,omitempty"`
	DocumentQuerySource      *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource      `json:"documentQuerySource,omitempty"`
	KnowledgeBaseQuerySource *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource `json:"knowledgeBaseQuerySource,omitempty"`
	MaxResults               *int32                                                                                         `json:"maxResults,omitempty"`
}
