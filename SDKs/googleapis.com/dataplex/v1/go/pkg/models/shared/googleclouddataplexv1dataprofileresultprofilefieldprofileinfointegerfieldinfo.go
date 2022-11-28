package shared

// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo
// IntegerFieldInfo defines output for any integer type field.
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo struct {
	Average           *float64 `json:"average,omitempty"`
	Max               *string  `json:"max,omitempty"`
	Min               *string  `json:"min,omitempty"`
	Quartiles         []string `json:"quartiles,omitempty"`
	StandardDeviation *float64 `json:"standardDeviation,omitempty"`
}
