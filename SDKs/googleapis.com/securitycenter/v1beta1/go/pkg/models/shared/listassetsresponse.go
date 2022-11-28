package shared

// ListAssetsResponse
// Response message for listing assets.
type ListAssetsResponse struct {
	ListAssetsResults []ListAssetsResult `json:"listAssetsResults,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	ReadTime          *string            `json:"readTime,omitempty"`
	TotalSize         *int32             `json:"totalSize,omitempty"`
}
