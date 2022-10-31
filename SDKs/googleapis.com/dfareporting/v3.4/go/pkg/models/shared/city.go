package shared

type City struct {
	CountryCode   *string `json:"countryCode,omitempty"`
	CountryDartID *string `json:"countryDartId,omitempty"`
	DartID        *string `json:"dartId,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	MetroCode     *string `json:"metroCode,omitempty"`
	MetroDmaID    *string `json:"metroDmaId,omitempty"`
	Name          *string `json:"name,omitempty"`
	RegionCode    *string `json:"regionCode,omitempty"`
	RegionDartID  *string `json:"regionDartId,omitempty"`
}
