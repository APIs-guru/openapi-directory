package shared

type FirstLastNameGeoIn struct {
	CountryIso2 *string `json:"countryIso2"`
	FirstName   *string `json:"firstName"`
	ID          *string `json:"id"`
	LastName    *string `json:"lastName"`
}
