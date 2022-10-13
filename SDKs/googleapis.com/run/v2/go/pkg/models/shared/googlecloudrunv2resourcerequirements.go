package shared

type GoogleCloudRunV2ResourceRequirements struct {
	CPUIdle *bool             `json:"cpuIdle"`
	Limits  map[string]string `json:"limits"`
}
