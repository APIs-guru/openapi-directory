package shared

// GoogleCloudDialogflowCxV3beta1TestConfig
// Represents configurations for a test case.
type GoogleCloudDialogflowCxV3beta1TestConfig struct {
	Flow               *string  `json:"flow,omitempty"`
	Page               *string  `json:"page,omitempty"`
	TrackingParameters []string `json:"trackingParameters,omitempty"`
}
