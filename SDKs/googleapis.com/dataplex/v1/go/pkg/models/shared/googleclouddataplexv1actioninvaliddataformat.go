package shared

type GoogleCloudDataplexV1ActionInvalidDataFormat struct {
	ExpectedFormat       *string  `json:"expectedFormat"`
	NewFormat            *string  `json:"newFormat"`
	SampledDataLocations []string `json:"sampledDataLocations"`
}
