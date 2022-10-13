package shared

type Metric struct {
	Labels map[string]string `json:"labels"`
	Type   *string           `json:"type"`
}
