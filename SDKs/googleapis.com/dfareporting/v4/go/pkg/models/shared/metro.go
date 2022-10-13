package shared

type Metro struct {
	CountryCode   *string `json:"countryCode"`
	CountryDartID *string `json:"countryDartId"`
	DartID        *string `json:"dartId"`
	DmaID         *string `json:"dmaId"`
	Kind          *string `json:"kind"`
	MetroCode     *string `json:"metroCode"`
	Name          *string `json:"name"`
}
