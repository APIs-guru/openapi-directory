package shared



type ArtistInfoRemoteSearchQuery struct {
    IncludeDisabledProviders *bool `json:"IncludeDisabledProviders,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    SearchInfo *ArtistInfo `json:"SearchInfo,omitempty"`
    SearchProviderName *string `json:"SearchProviderName,omitempty"`
    
}

