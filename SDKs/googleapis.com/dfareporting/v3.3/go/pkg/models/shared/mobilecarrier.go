package shared

type MobileCarrier struct {
	CountryCode   *string `json:"countryCode,omitempty"`
	CountryDartID *string `json:"countryDartId,omitempty"`
	ID            *string `json:"id,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	Name          *string `json:"name,omitempty"`
}
