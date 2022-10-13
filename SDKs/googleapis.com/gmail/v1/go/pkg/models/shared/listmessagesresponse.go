package shared

type ListMessagesResponse struct {
	Messages           []Message `json:"messages"`
	NextPageToken      *string   `json:"nextPageToken"`
	ResultSizeEstimate *int64    `json:"resultSizeEstimate"`
}
