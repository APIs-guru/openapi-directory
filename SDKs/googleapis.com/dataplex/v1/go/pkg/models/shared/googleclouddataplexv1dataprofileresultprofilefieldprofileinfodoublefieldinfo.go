package shared

// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo
// DoubleFieldInfo defines output for any double type field.
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo struct {
	Average           *float64  `json:"average,omitempty"`
	Max               *float64  `json:"max,omitempty"`
	Min               *float64  `json:"min,omitempty"`
	Quartiles         []float64 `json:"quartiles,omitempty"`
	StandardDeviation *float64  `json:"standardDeviation,omitempty"`
}
