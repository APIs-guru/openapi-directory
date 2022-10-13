package shared

type ListLikedAssetsResponse struct {
	Assets        []Asset `json:"assets"`
	NextPageToken *string `json:"nextPageToken"`
	TotalSize     *int32  `json:"totalSize"`
}
