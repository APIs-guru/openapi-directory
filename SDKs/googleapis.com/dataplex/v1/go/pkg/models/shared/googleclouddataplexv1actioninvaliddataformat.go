package shared

// GoogleCloudDataplexV1ActionInvalidDataFormat
// Action details for invalid or unsupported data files detected by discovery.
type GoogleCloudDataplexV1ActionInvalidDataFormat struct {
	ExpectedFormat       *string  `json:"expectedFormat,omitempty"`
	NewFormat            *string  `json:"newFormat,omitempty"`
	SampledDataLocations []string `json:"sampledDataLocations,omitempty"`
}
