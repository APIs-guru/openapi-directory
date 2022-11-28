package shared

// GroupAssetsResponse
// Response message for grouping by assets.
type GroupAssetsResponse struct {
	GroupByResults []GroupResult `json:"groupByResults,omitempty"`
	NextPageToken  *string       `json:"nextPageToken,omitempty"`
	ReadTime       *string       `json:"readTime,omitempty"`
	TotalSize      *int32        `json:"totalSize,omitempty"`
}
