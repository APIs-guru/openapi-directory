package shared

type ListQuestionsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Questions     []Question `json:"questions"`
	TotalSize     *int32     `json:"totalSize"`
}
