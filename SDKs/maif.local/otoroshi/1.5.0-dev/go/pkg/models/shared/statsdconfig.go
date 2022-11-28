package shared

// StatsdConfig
// The configuration for statsd metrics push
type StatsdConfig struct {
	Datadog bool   `json:"datadog"`
	Host    string `json:"host"`
	Port    int32  `json:"port"`
}
