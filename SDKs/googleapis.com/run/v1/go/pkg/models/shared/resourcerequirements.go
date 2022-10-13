package shared

type ResourceRequirements struct {
	Limits   map[string]string `json:"limits"`
	Requests map[string]string `json:"requests"`
}
