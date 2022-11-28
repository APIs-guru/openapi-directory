package shared

// Country
// Contains information about a country that can be targeted by ads.
type Country struct {
	CountryCode *string `json:"countryCode,omitempty"`
	DartID      *string `json:"dartId,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	Name        *string `json:"name,omitempty"`
	SslEnabled  *bool   `json:"sslEnabled,omitempty"`
}
