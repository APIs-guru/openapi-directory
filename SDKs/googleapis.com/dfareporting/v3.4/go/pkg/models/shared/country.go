package shared

type Country struct {
	CountryCode *string `json:"countryCode,omitempty"`
	DartID      *string `json:"dartId,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	Name        *string `json:"name,omitempty"`
	SslEnabled  *bool   `json:"sslEnabled,omitempty"`
}
