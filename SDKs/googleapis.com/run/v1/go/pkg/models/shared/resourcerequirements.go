package shared

// ResourceRequirements
// ResourceRequirements describes the compute resource requirements.
type ResourceRequirements struct {
	Limits   map[string]string `json:"limits,omitempty"`
	Requests map[string]string `json:"requests,omitempty"`
}
