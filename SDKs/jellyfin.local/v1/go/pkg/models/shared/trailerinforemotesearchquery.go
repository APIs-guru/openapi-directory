package shared



type TrailerInfoRemoteSearchQuery struct {
    IncludeDisabledProviders *bool `json:"IncludeDisabledProviders,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    SearchInfo *TrailerInfo `json:"SearchInfo,omitempty"`
    SearchProviderName *string `json:"SearchProviderName,omitempty"`
    
}

