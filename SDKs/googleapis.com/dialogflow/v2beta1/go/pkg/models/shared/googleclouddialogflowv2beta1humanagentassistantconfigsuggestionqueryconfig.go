package shared

type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig struct {
	ConfidenceThreshold      *float32                                                                                            `json:"confidenceThreshold"`
	ContextFilterSettings    *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings    `json:"contextFilterSettings"`
	DialogflowQuerySource    *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource    `json:"dialogflowQuerySource"`
	DocumentQuerySource      *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource      `json:"documentQuerySource"`
	KnowledgeBaseQuerySource *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource `json:"knowledgeBaseQuerySource"`
	MaxResults               *int32                                                                                              `json:"maxResults"`
}
