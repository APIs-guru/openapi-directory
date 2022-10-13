package shared

type PersonLookupInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool             `json:"IncludeDisabledProviders"`
	ItemID                   *string           `json:"ItemId"`
	SearchInfo               *PersonLookupInfo `json:"SearchInfo"`
	SearchProviderName       *string           `json:"SearchProviderName"`
}
