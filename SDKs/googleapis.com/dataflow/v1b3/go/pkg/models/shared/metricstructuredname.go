package shared

type MetricStructuredName struct {
	Context map[string]string `json:"context"`
	Name    *string           `json:"name"`
	Origin  *string           `json:"origin"`
}
