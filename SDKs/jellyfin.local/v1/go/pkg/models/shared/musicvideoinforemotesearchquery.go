package shared

type MusicVideoInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool           `json:"IncludeDisabledProviders,omitempty"`
	ItemID                   *string         `json:"ItemId,omitempty"`
	SearchInfo               *MusicVideoInfo `json:"SearchInfo,omitempty"`
	SearchProviderName       *string         `json:"SearchProviderName,omitempty"`
}
