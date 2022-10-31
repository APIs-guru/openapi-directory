package shared



type ListAssetsResponse struct {
    Assets []Asset `json:"assets,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

