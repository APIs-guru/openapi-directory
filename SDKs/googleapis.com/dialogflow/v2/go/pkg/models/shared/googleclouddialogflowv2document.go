package shared

type GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum string

const (
	GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumKnowledgeTypeUnspecified GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum = "KNOWLEDGE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumFaq                      GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum = "FAQ"
	GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumExtractiveQa             GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum = "EXTRACTIVE_QA"
	GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumArticleSuggestion        GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum = "ARTICLE_SUGGESTION"
	GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumAgentFacingSmartReply    GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum = "AGENT_FACING_SMART_REPLY"
)

type GoogleCloudDialogflowV2DocumentStateEnum string

const (
	GoogleCloudDialogflowV2DocumentStateEnumStateUnspecified GoogleCloudDialogflowV2DocumentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2DocumentStateEnumCreating         GoogleCloudDialogflowV2DocumentStateEnum = "CREATING"
	GoogleCloudDialogflowV2DocumentStateEnumActive           GoogleCloudDialogflowV2DocumentStateEnum = "ACTIVE"
	GoogleCloudDialogflowV2DocumentStateEnumUpdating         GoogleCloudDialogflowV2DocumentStateEnum = "UPDATING"
	GoogleCloudDialogflowV2DocumentStateEnumReloading        GoogleCloudDialogflowV2DocumentStateEnum = "RELOADING"
	GoogleCloudDialogflowV2DocumentStateEnumDeleting         GoogleCloudDialogflowV2DocumentStateEnum = "DELETING"
)

type GoogleCloudDialogflowV2Document struct {
	ContentURI         *string                                             `json:"contentUri"`
	DisplayName        *string                                             `json:"displayName"`
	EnableAutoReload   *bool                                               `json:"enableAutoReload"`
	KnowledgeTypes     []GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum `json:"knowledgeTypes"`
	LatestReloadStatus *GoogleCloudDialogflowV2DocumentReloadStatus        `json:"latestReloadStatus"`
	Metadata           map[string]string                                   `json:"metadata"`
	MimeType           *string                                             `json:"mimeType"`
	Name               *string                                             `json:"name"`
	RawContent         *string                                             `json:"rawContent"`
	State              *GoogleCloudDialogflowV2DocumentStateEnum           `json:"state"`
}
