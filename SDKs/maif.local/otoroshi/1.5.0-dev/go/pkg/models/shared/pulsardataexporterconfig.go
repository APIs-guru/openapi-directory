package shared

// PulsarDataExporterConfig
// The configuration for kafka access
type PulsarDataExporterConfig struct {
	Namespace string   `json:"namespace"`
	Tenant    string   `json:"tenant"`
	Topic     string   `json:"topic"`
	URI       []string `json:"uri"`
}
