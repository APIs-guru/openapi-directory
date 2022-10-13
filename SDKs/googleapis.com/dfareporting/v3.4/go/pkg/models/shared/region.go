package shared

type Region struct {
	CountryCode   *string `json:"countryCode"`
	CountryDartID *string `json:"countryDartId"`
	DartID        *string `json:"dartId"`
	Kind          *string `json:"kind"`
	Name          *string `json:"name"`
	RegionCode    *string `json:"regionCode"`
}
