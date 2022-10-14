package shared

type PersonalNameGeoOut struct {
	CountriesTop             []string `json:"countriesTop,omitempty"`
	Country                  *string  `json:"country,omitempty"`
	CountryAlt               *string  `json:"countryAlt,omitempty"`
	ID                       *string  `json:"id,omitempty"`
	Name                     *string  `json:"name,omitempty"`
	ProbabilityAltCalibrated *float64 `json:"probabilityAltCalibrated,omitempty"`
	ProbabilityCalibrated    *float64 `json:"probabilityCalibrated,omitempty"`
	Region                   *string  `json:"region,omitempty"`
	Score                    *float64 `json:"score,omitempty"`
	Script                   *string  `json:"script,omitempty"`
	SubRegion                *string  `json:"subRegion,omitempty"`
	TopRegion                *string  `json:"topRegion,omitempty"`
}
