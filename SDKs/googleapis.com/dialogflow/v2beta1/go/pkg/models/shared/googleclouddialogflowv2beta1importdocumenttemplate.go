package shared

type GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum string

const (
	GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumKnowledgeTypeUnspecified GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum = "KNOWLEDGE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumFaq                      GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum = "FAQ"
	GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumExtractiveQa             GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum = "EXTRACTIVE_QA"
	GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumArticleSuggestion        GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum = "ARTICLE_SUGGESTION"
	GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumAgentFacingSmartReply    GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum = "AGENT_FACING_SMART_REPLY"
	GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumSmartReply               GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum = "SMART_REPLY"
)

type GoogleCloudDialogflowV2beta1ImportDocumentTemplate struct {
	KnowledgeTypes []GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum `json:"knowledgeTypes,omitempty"`
	Metadata       map[string]string                                                      `json:"metadata,omitempty"`
	MimeType       *string                                                                `json:"mimeType,omitempty"`
}
