package shared

type TrailerInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool        `json:"IncludeDisabledProviders"`
	ItemID                   *string      `json:"ItemId"`
	SearchInfo               *TrailerInfo `json:"SearchInfo"`
	SearchProviderName       *string      `json:"SearchProviderName"`
}
