package shared

type BookInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool     `json:"IncludeDisabledProviders"`
	ItemID                   *string   `json:"ItemId"`
	SearchInfo               *BookInfo `json:"SearchInfo"`
	SearchProviderName       *string   `json:"SearchProviderName"`
}
