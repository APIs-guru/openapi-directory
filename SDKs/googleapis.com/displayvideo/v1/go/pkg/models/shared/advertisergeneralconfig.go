package shared

type AdvertiserGeneralConfig struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	DomainURL    *string `json:"domainUrl,omitempty"`
	TimeZone     *string `json:"timeZone,omitempty"`
}
