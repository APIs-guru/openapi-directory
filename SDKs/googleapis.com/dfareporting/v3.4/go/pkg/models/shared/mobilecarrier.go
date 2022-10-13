package shared

type MobileCarrier struct {
	CountryCode   *string `json:"countryCode"`
	CountryDartID *string `json:"countryDartId"`
	ID            *string `json:"id"`
	Kind          *string `json:"kind"`
	Name          *string `json:"name"`
}
