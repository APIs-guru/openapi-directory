package shared



type AlbumInfoRemoteSearchQuery struct {
    IncludeDisabledProviders *bool `json:"IncludeDisabledProviders,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    SearchInfo *AlbumInfo `json:"SearchInfo,omitempty"`
    SearchProviderName *string `json:"SearchProviderName,omitempty"`
    
}

