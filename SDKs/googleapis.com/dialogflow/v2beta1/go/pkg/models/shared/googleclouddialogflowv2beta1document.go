package shared

type GoogleCloudDialogflowV2beta1DocumentStateEnum string

const (
	GoogleCloudDialogflowV2beta1DocumentStateEnumStateUnspecified GoogleCloudDialogflowV2beta1DocumentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1DocumentStateEnumCreating         GoogleCloudDialogflowV2beta1DocumentStateEnum = "CREATING"
	GoogleCloudDialogflowV2beta1DocumentStateEnumActive           GoogleCloudDialogflowV2beta1DocumentStateEnum = "ACTIVE"
	GoogleCloudDialogflowV2beta1DocumentStateEnumUpdating         GoogleCloudDialogflowV2beta1DocumentStateEnum = "UPDATING"
	GoogleCloudDialogflowV2beta1DocumentStateEnumReloading        GoogleCloudDialogflowV2beta1DocumentStateEnum = "RELOADING"
	GoogleCloudDialogflowV2beta1DocumentStateEnumDeleting         GoogleCloudDialogflowV2beta1DocumentStateEnum = "DELETING"
)

type GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum string

const (
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumKnowledgeTypeUnspecified GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "KNOWLEDGE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumFaq                      GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "FAQ"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumExtractiveQa             GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "EXTRACTIVE_QA"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumArticleSuggestion        GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "ARTICLE_SUGGESTION"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumAgentFacingSmartReply    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "AGENT_FACING_SMART_REPLY"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumSmartReply               GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "SMART_REPLY"
)

// GoogleCloudDialogflowV2beta1Document
// A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
type GoogleCloudDialogflowV2beta1Document struct {
	Content            *string                                                  `json:"content,omitempty"`
	ContentURI         *string                                                  `json:"contentUri,omitempty"`
	DisplayName        *string                                                  `json:"displayName,omitempty"`
	EnableAutoReload   *bool                                                    `json:"enableAutoReload,omitempty"`
	KnowledgeTypes     []GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum `json:"knowledgeTypes,omitempty"`
	LatestReloadStatus *GoogleCloudDialogflowV2beta1DocumentReloadStatus        `json:"latestReloadStatus,omitempty"`
	Metadata           map[string]string                                        `json:"metadata,omitempty"`
	MimeType           *string                                                  `json:"mimeType,omitempty"`
	Name               *string                                                  `json:"name,omitempty"`
	RawContent         *string                                                  `json:"rawContent,omitempty"`
	State              *GoogleCloudDialogflowV2beta1DocumentStateEnum           `json:"state,omitempty"`
}

// GoogleCloudDialogflowV2beta1DocumentInput
// A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
type GoogleCloudDialogflowV2beta1DocumentInput struct {
	Content            *string                                                  `json:"content,omitempty"`
	ContentURI         *string                                                  `json:"contentUri,omitempty"`
	DisplayName        *string                                                  `json:"displayName,omitempty"`
	EnableAutoReload   *bool                                                    `json:"enableAutoReload,omitempty"`
	KnowledgeTypes     []GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum `json:"knowledgeTypes,omitempty"`
	LatestReloadStatus *GoogleCloudDialogflowV2beta1DocumentReloadStatus        `json:"latestReloadStatus,omitempty"`
	Metadata           map[string]string                                        `json:"metadata,omitempty"`
	MimeType           *string                                                  `json:"mimeType,omitempty"`
	Name               *string                                                  `json:"name,omitempty"`
	RawContent         *string                                                  `json:"rawContent,omitempty"`
}
