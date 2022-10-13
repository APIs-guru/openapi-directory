package shared

type MovieInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool      `json:"IncludeDisabledProviders"`
	ItemID                   *string    `json:"ItemId"`
	SearchInfo               *MovieInfo `json:"SearchInfo"`
	SearchProviderName       *string    `json:"SearchProviderName"`
}
