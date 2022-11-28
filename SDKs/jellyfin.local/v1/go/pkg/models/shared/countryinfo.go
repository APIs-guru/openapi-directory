package shared

// CountryInfo
// Class CountryInfo.
type CountryInfo struct {
	DisplayName              *string `json:"DisplayName,omitempty"`
	Name                     *string `json:"Name,omitempty"`
	ThreeLetterIsoRegionName *string `json:"ThreeLetterISORegionName,omitempty"`
	TwoLetterIsoRegionName   *string `json:"TwoLetterISORegionName,omitempty"`
}
