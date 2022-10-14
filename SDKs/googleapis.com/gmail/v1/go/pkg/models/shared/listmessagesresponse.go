package shared

type ListMessagesResponse struct {
	Messages           []Message `json:"messages,omitempty"`
	NextPageToken      *string   `json:"nextPageToken,omitempty"`
	ResultSizeEstimate *int64    `json:"resultSizeEstimate,omitempty"`
}
