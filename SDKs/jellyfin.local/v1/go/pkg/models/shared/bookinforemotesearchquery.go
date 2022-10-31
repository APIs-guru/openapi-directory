package shared



type BookInfoRemoteSearchQuery struct {
    IncludeDisabledProviders *bool `json:"IncludeDisabledProviders,omitempty"`
    ItemID *string `json:"ItemId,omitempty"`
    SearchInfo *BookInfo `json:"SearchInfo,omitempty"`
    SearchProviderName *string `json:"SearchProviderName,omitempty"`
    
}

