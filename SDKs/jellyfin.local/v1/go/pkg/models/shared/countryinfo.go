package shared

type CountryInfo struct {
	DisplayName              *string `json:"DisplayName"`
	Name                     *string `json:"Name"`
	ThreeLetterIsoRegionName *string `json:"ThreeLetterISORegionName"`
	TwoLetterIsoRegionName   *string `json:"TwoLetterISORegionName"`
}
