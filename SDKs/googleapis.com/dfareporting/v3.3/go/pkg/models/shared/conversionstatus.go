package shared

type ConversionStatus struct {
	Conversion *Conversion       `json:"conversion"`
	Errors     []ConversionError `json:"errors"`
	Kind       *string           `json:"kind"`
}
