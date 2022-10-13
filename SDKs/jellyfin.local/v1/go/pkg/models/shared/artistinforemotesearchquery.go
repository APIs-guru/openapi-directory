package shared

type ArtistInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool       `json:"IncludeDisabledProviders"`
	ItemID                   *string     `json:"ItemId"`
	SearchInfo               *ArtistInfo `json:"SearchInfo"`
	SearchProviderName       *string     `json:"SearchProviderName"`
}
