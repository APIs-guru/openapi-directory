package shared

type ConversionList struct {
	Conversion []Conversion `json:"conversion"`
	Kind       *string      `json:"kind"`
}
