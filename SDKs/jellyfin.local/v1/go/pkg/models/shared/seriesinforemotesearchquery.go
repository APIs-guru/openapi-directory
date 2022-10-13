package shared

type SeriesInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool       `json:"IncludeDisabledProviders"`
	ItemID                   *string     `json:"ItemId"`
	SearchInfo               *SeriesInfo `json:"SearchInfo"`
	SearchProviderName       *string     `json:"SearchProviderName"`
}
