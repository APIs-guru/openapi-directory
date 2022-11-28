package shared

// AdvertiserGeneralConfig
// General settings of an advertiser.
type AdvertiserGeneralConfig struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	DomainURL    *string `json:"domainUrl,omitempty"`
	TimeZone     *string `json:"timeZone,omitempty"`
}

// AdvertiserGeneralConfigInput
// General settings of an advertiser.
type AdvertiserGeneralConfigInput struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	DomainURL    *string `json:"domainUrl,omitempty"`
}
