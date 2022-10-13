package shared

type AdvertiserGeneralConfig struct {
	CurrencyCode *string `json:"currencyCode"`
	DomainURL    *string `json:"domainUrl"`
	TimeZone     *string `json:"timeZone"`
}
