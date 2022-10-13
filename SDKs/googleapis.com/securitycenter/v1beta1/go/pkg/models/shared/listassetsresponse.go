package shared

type ListAssetsResponse struct {
	ListAssetsResults []ListAssetsResult `json:"listAssetsResults"`
	NextPageToken     *string            `json:"nextPageToken"`
	ReadTime          *string            `json:"readTime"`
	TotalSize         *int32             `json:"totalSize"`
}
