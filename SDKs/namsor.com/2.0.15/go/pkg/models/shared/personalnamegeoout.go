package shared

type PersonalNameGeoOut struct {
	CountriesTop             []string `json:"countriesTop"`
	Country                  *string  `json:"country"`
	CountryAlt               *string  `json:"countryAlt"`
	ID                       *string  `json:"id"`
	Name                     *string  `json:"name"`
	ProbabilityAltCalibrated *float64 `json:"probabilityAltCalibrated"`
	ProbabilityCalibrated    *float64 `json:"probabilityCalibrated"`
	Region                   *string  `json:"region"`
	Score                    *float64 `json:"score"`
	Script                   *string  `json:"script"`
	SubRegion                *string  `json:"subRegion"`
	TopRegion                *string  `json:"topRegion"`
}
