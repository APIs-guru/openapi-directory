package shared

// GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse
// Response message for KnowledgeBases.ListKnowledgeBases.
type GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse struct {
	KnowledgeBases []GoogleCloudDialogflowV2beta1KnowledgeBase `json:"knowledgeBases,omitempty"`
	NextPageToken  *string                                     `json:"nextPageToken,omitempty"`
}
