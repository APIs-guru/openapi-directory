package shared

type ConversionStatus struct {
	Conversion *Conversion       `json:"conversion,omitempty"`
	Errors     []ConversionError `json:"errors,omitempty"`
	Kind       *string           `json:"kind,omitempty"`
}
