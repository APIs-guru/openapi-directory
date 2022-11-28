package shared

// GoogleCloudDialogflowCxV3TestConfig
// Represents configurations for a test case.
type GoogleCloudDialogflowCxV3TestConfig struct {
	Flow               *string  `json:"flow,omitempty"`
	Page               *string  `json:"page,omitempty"`
	TrackingParameters []string `json:"trackingParameters,omitempty"`
}
