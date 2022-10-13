package shared

type GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig struct {
	ConfidenceThreshold      *float32                                                                                       `json:"confidenceThreshold"`
	ContextFilterSettings    *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings    `json:"contextFilterSettings"`
	DialogflowQuerySource    *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource    `json:"dialogflowQuerySource"`
	DocumentQuerySource      *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource      `json:"documentQuerySource"`
	KnowledgeBaseQuerySource *GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource `json:"knowledgeBaseQuerySource"`
	MaxResults               *int32                                                                                         `json:"maxResults"`
}
