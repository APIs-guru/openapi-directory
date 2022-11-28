package shared

// ConversionList
// A list of conversions.
type ConversionList struct {
	Conversion []Conversion `json:"conversion,omitempty"`
	Kind       *string      `json:"kind,omitempty"`
}
