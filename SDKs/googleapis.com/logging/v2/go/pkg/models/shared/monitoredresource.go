package shared

type MonitoredResource struct {
	Labels map[string]string `json:"labels"`
	Type   *string           `json:"type"`
}
