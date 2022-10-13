package shared

type PostalCode struct {
	Code          *string `json:"code"`
	CountryCode   *string `json:"countryCode"`
	CountryDartID *string `json:"countryDartId"`
	ID            *string `json:"id"`
	Kind          *string `json:"kind"`
}
