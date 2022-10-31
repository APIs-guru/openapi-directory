package shared

type HealthCheck struct {
	Enabled bool    `json:"enabled"`
	URL     *string `json:"url,omitempty"`
}
