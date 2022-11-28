package shared

// MonitoringConfig
// MonitoringConfig is cluster monitoring configuration.
type MonitoringConfig struct {
	ComponentConfig         *MonitoringComponentConfig `json:"componentConfig,omitempty"`
	ManagedPrometheusConfig *ManagedPrometheusConfig   `json:"managedPrometheusConfig,omitempty"`
}
