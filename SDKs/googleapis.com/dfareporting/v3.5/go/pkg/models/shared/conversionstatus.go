package shared

// ConversionStatus
// The original conversion that was inserted or updated and whether there were any errors.
type ConversionStatus struct {
	Conversion *Conversion       `json:"conversion,omitempty"`
	Errors     []ConversionError `json:"errors,omitempty"`
	Kind       *string           `json:"kind,omitempty"`
}
