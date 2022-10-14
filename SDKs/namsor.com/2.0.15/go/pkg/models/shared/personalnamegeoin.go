package shared

type PersonalNameGeoIn struct {
	CountryIso2 *string `json:"countryIso2,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
}
