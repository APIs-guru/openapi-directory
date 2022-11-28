package shared

// GoogleCloudRunV2ResourceRequirements
// ResourceRequirements describes the compute resource requirements.
type GoogleCloudRunV2ResourceRequirements struct {
	CPUIdle *bool             `json:"cpuIdle,omitempty"`
	Limits  map[string]string `json:"limits,omitempty"`
}
