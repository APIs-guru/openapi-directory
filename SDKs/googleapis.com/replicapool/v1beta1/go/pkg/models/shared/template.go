package shared

type Template struct {
	Action       *Action       `json:"action"`
	HealthChecks []HealthCheck `json:"healthChecks"`
	Version      *string       `json:"version"`
	VMParams     *VMParams     `json:"vmParams"`
}
