package shared

type GoogleCloudMlV1Location struct {
	Capabilities []GoogleCloudMlV1Capability `json:"capabilities,omitempty"`
	Name         *string                     `json:"name,omitempty"`
}
