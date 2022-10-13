package shared

type Country struct {
	CountryCode *string `json:"countryCode"`
	DartID      *string `json:"dartId"`
	Kind        *string `json:"kind"`
	Name        *string `json:"name"`
	SslEnabled  *bool   `json:"sslEnabled"`
}
