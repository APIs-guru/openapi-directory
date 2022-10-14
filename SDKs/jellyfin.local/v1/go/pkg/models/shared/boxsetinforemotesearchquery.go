package shared

type BoxSetInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool       `json:"IncludeDisabledProviders,omitempty"`
	ItemID                   *string     `json:"ItemId,omitempty"`
	SearchInfo               *BoxSetInfo `json:"SearchInfo,omitempty"`
	SearchProviderName       *string     `json:"SearchProviderName,omitempty"`
}
