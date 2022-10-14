package shared

type MonitoringConfig struct {
	ComponentConfig         *MonitoringComponentConfig `json:"componentConfig,omitempty"`
	ManagedPrometheusConfig *ManagedPrometheusConfig   `json:"managedPrometheusConfig,omitempty"`
}
