package shared

// RegionPostalCodeAreaPostalCodeRange
// A range of postal codes that defines the region area.
type RegionPostalCodeAreaPostalCodeRange struct {
	Begin *string `json:"begin,omitempty"`
	End   *string `json:"end,omitempty"`
}
