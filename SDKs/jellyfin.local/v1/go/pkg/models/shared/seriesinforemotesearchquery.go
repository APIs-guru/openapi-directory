package shared



type SeriesInfoRemoteSearchQuery struct {
    IncludeDisabledProviders *bool `json:"IncludeDisabledProviders,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    SearchInfo *SeriesInfo `json:"SearchInfo,omitempty"`
    SearchProviderName *string `json:"SearchProviderName,omitempty"`
    
}

