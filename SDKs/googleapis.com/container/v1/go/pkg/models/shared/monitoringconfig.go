package shared

type MonitoringConfig struct {
	ComponentConfig         *MonitoringComponentConfig `json:"componentConfig"`
	ManagedPrometheusConfig *ManagedPrometheusConfig   `json:"managedPrometheusConfig"`
}
