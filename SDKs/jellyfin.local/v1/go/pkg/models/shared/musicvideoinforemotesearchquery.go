package shared

type MusicVideoInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool           `json:"IncludeDisabledProviders"`
	ItemID                   *string         `json:"ItemId"`
	SearchInfo               *MusicVideoInfo `json:"SearchInfo"`
	SearchProviderName       *string         `json:"SearchProviderName"`
}
