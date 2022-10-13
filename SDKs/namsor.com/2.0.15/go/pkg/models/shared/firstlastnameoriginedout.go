package shared

type FirstLastNameOriginedOut struct {
	CountriesOriginTop       []string `json:"countriesOriginTop"`
	CountryOrigin            *string  `json:"countryOrigin"`
	CountryOriginAlt         *string  `json:"countryOriginAlt"`
	FirstName                *string  `json:"firstName"`
	ID                       *string  `json:"id"`
	LastName                 *string  `json:"lastName"`
	ProbabilityAltCalibrated *float64 `json:"probabilityAltCalibrated"`
	ProbabilityCalibrated    *float64 `json:"probabilityCalibrated"`
	RegionOrigin             *string  `json:"regionOrigin"`
	Score                    *float64 `json:"score"`
	Script                   *string  `json:"script"`
	SubRegionOrigin          *string  `json:"subRegionOrigin"`
	TopRegionOrigin          *string  `json:"topRegionOrigin"`
}
