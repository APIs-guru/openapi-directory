package shared

type City struct {
	CountryCode   *string `json:"countryCode"`
	CountryDartID *string `json:"countryDartId"`
	DartID        *string `json:"dartId"`
	Kind          *string `json:"kind"`
	MetroCode     *string `json:"metroCode"`
	MetroDmaID    *string `json:"metroDmaId"`
	Name          *string `json:"name"`
	RegionCode    *string `json:"regionCode"`
	RegionDartID  *string `json:"regionDartId"`
}
