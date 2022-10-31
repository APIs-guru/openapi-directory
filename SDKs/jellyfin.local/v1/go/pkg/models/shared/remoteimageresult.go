package shared



type RemoteImageResult struct {
    Images []RemoteImageInfo `json:"Images,omitempty"`
    Providers []string `json:"Providers,omitempty"`
    TotalRecordCount *int32 `json:"TotalRecordCount,omitempty"`
    
}

