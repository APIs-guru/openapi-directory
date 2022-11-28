package shared

// PostalCode
// Contains information about a postal code that can be targeted by ads.
type PostalCode struct {
	Code          *string `json:"code,omitempty"`
	CountryCode   *string `json:"countryCode,omitempty"`
	CountryDartID *string `json:"countryDartId,omitempty"`
	ID            *string `json:"id,omitempty"`
	Kind          *string `json:"kind,omitempty"`
}
