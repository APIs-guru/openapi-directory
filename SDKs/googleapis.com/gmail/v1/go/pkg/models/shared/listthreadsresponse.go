package shared

type ListThreadsResponse struct {
	NextPageToken      *string  `json:"nextPageToken,omitempty"`
	ResultSizeEstimate *int64   `json:"resultSizeEstimate,omitempty"`
	Threads            []Thread `json:"threads,omitempty"`
}
