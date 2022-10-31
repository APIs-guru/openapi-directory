package shared

type PersonLookupInfoRemoteSearchQuery struct {
	IncludeDisabledProviders *bool             `json:"IncludeDisabledProviders,omitempty"`
	ItemID                   *string           `json:"ItemId,omitempty"`
	SearchInfo               *PersonLookupInfo `json:"SearchInfo,omitempty"`
	SearchProviderName       *string           `json:"SearchProviderName,omitempty"`
}
