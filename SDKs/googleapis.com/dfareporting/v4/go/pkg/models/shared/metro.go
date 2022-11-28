package shared

// Metro
// Contains information about a metro region that can be targeted by ads.
type Metro struct {
	CountryCode   *string `json:"countryCode,omitempty"`
	CountryDartID *string `json:"countryDartId,omitempty"`
	DartID        *string `json:"dartId,omitempty"`
	DmaID         *string `json:"dmaId,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	MetroCode     *string `json:"metroCode,omitempty"`
	Name          *string `json:"name,omitempty"`
}
