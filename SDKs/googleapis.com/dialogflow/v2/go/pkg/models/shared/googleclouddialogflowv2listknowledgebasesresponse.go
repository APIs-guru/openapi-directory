package shared

// GoogleCloudDialogflowV2ListKnowledgeBasesResponse
// Response message for KnowledgeBases.ListKnowledgeBases.
type GoogleCloudDialogflowV2ListKnowledgeBasesResponse struct {
	KnowledgeBases []GoogleCloudDialogflowV2KnowledgeBase `json:"knowledgeBases,omitempty"`
	NextPageToken  *string                                `json:"nextPageToken,omitempty"`
}
