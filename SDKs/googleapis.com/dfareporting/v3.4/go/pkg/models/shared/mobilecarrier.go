package shared

// MobileCarrier
// Contains information about a mobile carrier that can be targeted by ads.
type MobileCarrier struct {
	CountryCode   *string `json:"countryCode,omitempty"`
	CountryDartID *string `json:"countryDartId,omitempty"`
	ID            *string `json:"id,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	Name          *string `json:"name,omitempty"`
}
