package shared

type GoogleCloudDialogflowV2ListKnowledgeBasesResponse struct {
	KnowledgeBases []GoogleCloudDialogflowV2KnowledgeBase `json:"knowledgeBases"`
	NextPageToken  *string                                `json:"nextPageToken"`
}
