package shared

type ListThreadsResponse struct {
	NextPageToken      *string  `json:"nextPageToken"`
	ResultSizeEstimate *int64   `json:"resultSizeEstimate"`
	Threads            []Thread `json:"threads"`
}
