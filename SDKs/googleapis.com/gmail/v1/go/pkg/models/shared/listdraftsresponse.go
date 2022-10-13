package shared

type ListDraftsResponse struct {
	Drafts             []Draft `json:"drafts"`
	NextPageToken      *string `json:"nextPageToken"`
	ResultSizeEstimate *int64  `json:"resultSizeEstimate"`
}
