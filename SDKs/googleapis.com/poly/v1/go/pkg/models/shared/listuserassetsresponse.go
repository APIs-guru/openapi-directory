package shared

type ListUserAssetsResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	TotalSize     *int32      `json:"totalSize"`
	UserAssets    []UserAsset `json:"userAssets"`
}
