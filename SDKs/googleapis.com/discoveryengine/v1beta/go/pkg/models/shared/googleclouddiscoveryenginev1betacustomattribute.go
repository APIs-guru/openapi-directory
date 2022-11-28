package shared

// GoogleCloudDiscoveryengineV1betaCustomAttribute
// A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
type GoogleCloudDiscoveryengineV1betaCustomAttribute struct {
	Numbers []float64 `json:"numbers,omitempty"`
	Text    []string  `json:"text,omitempty"`
}
