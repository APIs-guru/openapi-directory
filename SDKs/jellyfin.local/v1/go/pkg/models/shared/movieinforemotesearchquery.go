package shared

type MovieInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool      `json:"IncludeDisabledProviders,omitempty"`
	ItemID                   *string    `json:"ItemId,omitempty"`
	SearchInfo               *MovieInfo `json:"SearchInfo,omitempty"`
	SearchProviderName       *string    `json:"SearchProviderName,omitempty"`
}
