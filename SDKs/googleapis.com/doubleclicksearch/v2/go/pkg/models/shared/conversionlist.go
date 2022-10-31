package shared

type ConversionList struct {
	Conversion []Conversion `json:"conversion,omitempty"`
	Kind       *string      `json:"kind,omitempty"`
}
