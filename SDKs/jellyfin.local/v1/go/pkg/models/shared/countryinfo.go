package shared

type CountryInfo struct {
	DisplayName              *string `json:"DisplayName,omitempty"`
	Name                     *string `json:"Name,omitempty"`
	ThreeLetterIsoRegionName *string `json:"ThreeLetterISORegionName,omitempty"`
	TwoLetterIsoRegionName   *string `json:"TwoLetterISORegionName,omitempty"`
}
