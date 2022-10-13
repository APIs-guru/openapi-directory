package shared

type GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse struct {
	KnowledgeBases []GoogleCloudDialogflowV2beta1KnowledgeBase `json:"knowledgeBases"`
	NextPageToken  *string                                     `json:"nextPageToken"`
}
