package shared

type BoxSetInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool       `json:"IncludeDisabledProviders"`
	ItemID                   *string     `json:"ItemId"`
	SearchInfo               *BoxSetInfo `json:"SearchInfo"`
	SearchProviderName       *string     `json:"SearchProviderName"`
}
