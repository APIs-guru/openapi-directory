package shared



type FirstLastNameOriginedOut struct {
    CountriesOriginTop []string `json:"countriesOriginTop,omitempty"`
    CountryOrigin *string `json:"countryOrigin,omitempty"`
    CountryOriginAlt *string `json:"countryOriginAlt,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    ProbabilityAltCalibrated *float64 `json:"probabilityAltCalibrated,omitempty"`
    ProbabilityCalibrated *float64 `json:"probabilityCalibrated,omitempty"`
    RegionOrigin *string `json:"regionOrigin,omitempty"`
    Score *float64 `json:"score,omitempty"`
    Script *string `json:"script,omitempty"`
    SubRegionOrigin *string `json:"subRegionOrigin,omitempty"`
    TopRegionOrigin *string `json:"topRegionOrigin,omitempty"`
    
}

