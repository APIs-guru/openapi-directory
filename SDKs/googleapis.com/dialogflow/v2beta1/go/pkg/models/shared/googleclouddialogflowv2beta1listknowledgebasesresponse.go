package shared

type GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse struct {
	KnowledgeBases []GoogleCloudDialogflowV2beta1KnowledgeBase `json:"knowledgeBases,omitempty"`
	NextPageToken  *string                                     `json:"nextPageToken,omitempty"`
}
