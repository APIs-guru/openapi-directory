package shared



type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig struct {
    ConfidenceThreshold *float32 `json:"confidenceThreshold,omitempty"`
    ContextFilterSettings *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings `json:"contextFilterSettings,omitempty"`
    DialogflowQuerySource *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource `json:"dialogflowQuerySource,omitempty"`
    DocumentQuerySource *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource `json:"documentQuerySource,omitempty"`
    KnowledgeBaseQuerySource *GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource `json:"knowledgeBaseQuerySource,omitempty"`
    MaxResults *int32 `json:"maxResults,omitempty"`
    
}

