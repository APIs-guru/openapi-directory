package shared

type Region struct {
	CountryCode   *string `json:"countryCode,omitempty"`
	CountryDartID *string `json:"countryDartId,omitempty"`
	DartID        *string `json:"dartId,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	Name          *string `json:"name,omitempty"`
	RegionCode    *string `json:"regionCode,omitempty"`
}
