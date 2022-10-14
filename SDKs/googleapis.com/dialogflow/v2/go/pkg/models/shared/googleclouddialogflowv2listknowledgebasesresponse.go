package shared

type GoogleCloudDialogflowV2ListKnowledgeBasesResponse struct {
	KnowledgeBases []GoogleCloudDialogflowV2KnowledgeBase `json:"knowledgeBases,omitempty"`
	NextPageToken  *string                                `json:"nextPageToken,omitempty"`
}
