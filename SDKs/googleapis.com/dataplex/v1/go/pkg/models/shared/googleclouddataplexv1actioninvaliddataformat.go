package shared



type GoogleCloudDataplexV1ActionInvalidDataFormat struct {
    ExpectedFormat *string `json:"expectedFormat,omitempty"`
    NewFormat *string `json:"newFormat,omitempty"`
    SampledDataLocations []string `json:"sampledDataLocations,omitempty"`
    
}

