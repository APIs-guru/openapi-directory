package shared



type ListUserAssetsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    UserAssets []UserAsset `json:"userAssets,omitempty"`
    
}

