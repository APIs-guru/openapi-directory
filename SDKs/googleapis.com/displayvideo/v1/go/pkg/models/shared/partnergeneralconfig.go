package shared

// PartnerGeneralConfig
// General settings of a partner.
type PartnerGeneralConfig struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	TimeZone     *string `json:"timeZone,omitempty"`
}
