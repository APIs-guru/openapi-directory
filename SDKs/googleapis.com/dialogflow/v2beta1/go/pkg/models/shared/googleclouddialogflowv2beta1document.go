package shared

type GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum string

const (
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumKnowledgeTypeUnspecified GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "KNOWLEDGE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumFaq                      GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "FAQ"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumExtractiveQa             GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "EXTRACTIVE_QA"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumArticleSuggestion        GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "ARTICLE_SUGGESTION"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumAgentFacingSmartReply    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "AGENT_FACING_SMART_REPLY"
	GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumSmartReply               GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = "SMART_REPLY"
)

type GoogleCloudDialogflowV2beta1DocumentStateEnum string

const (
	GoogleCloudDialogflowV2beta1DocumentStateEnumStateUnspecified GoogleCloudDialogflowV2beta1DocumentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1DocumentStateEnumCreating         GoogleCloudDialogflowV2beta1DocumentStateEnum = "CREATING"
	GoogleCloudDialogflowV2beta1DocumentStateEnumActive           GoogleCloudDialogflowV2beta1DocumentStateEnum = "ACTIVE"
	GoogleCloudDialogflowV2beta1DocumentStateEnumUpdating         GoogleCloudDialogflowV2beta1DocumentStateEnum = "UPDATING"
	GoogleCloudDialogflowV2beta1DocumentStateEnumReloading        GoogleCloudDialogflowV2beta1DocumentStateEnum = "RELOADING"
	GoogleCloudDialogflowV2beta1DocumentStateEnumDeleting         GoogleCloudDialogflowV2beta1DocumentStateEnum = "DELETING"
)

type GoogleCloudDialogflowV2beta1Document struct {
	Content            *string                                                  `json:"content"`
	ContentURI         *string                                                  `json:"contentUri"`
	DisplayName        *string                                                  `json:"displayName"`
	EnableAutoReload   *bool                                                    `json:"enableAutoReload"`
	KnowledgeTypes     []GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum `json:"knowledgeTypes"`
	LatestReloadStatus *GoogleCloudDialogflowV2beta1DocumentReloadStatus        `json:"latestReloadStatus"`
	Metadata           map[string]string                                        `json:"metadata"`
	MimeType           *string                                                  `json:"mimeType"`
	Name               *string                                                  `json:"name"`
	RawContent         *string                                                  `json:"rawContent"`
	State              *GoogleCloudDialogflowV2beta1DocumentStateEnum           `json:"state"`
}
