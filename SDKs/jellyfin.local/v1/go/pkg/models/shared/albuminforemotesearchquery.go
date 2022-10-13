package shared

type AlbumInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool      `json:"IncludeDisabledProviders"`
	ItemID                   *string    `json:"ItemId"`
	SearchInfo               *AlbumInfo `json:"SearchInfo"`
	SearchProviderName       *string    `json:"SearchProviderName"`
}
