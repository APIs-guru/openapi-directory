package shared

// HealthCheck
// The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
type HealthCheck struct {
	Enabled bool    `json:"enabled"`
	URL     *string `json:"url,omitempty"`
}
