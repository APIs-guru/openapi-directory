package shared

type PolicyControllerMonitoringConfigBackendsEnum string

const (
	PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified PolicyControllerMonitoringConfigBackendsEnum = "MONITORING_BACKEND_UNSPECIFIED"
	PolicyControllerMonitoringConfigBackendsEnumPrometheus                   PolicyControllerMonitoringConfigBackendsEnum = "PROMETHEUS"
	PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring              PolicyControllerMonitoringConfigBackendsEnum = "CLOUD_MONITORING"
)

// PolicyControllerMonitoringConfig
// MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
type PolicyControllerMonitoringConfig struct {
	Backends []PolicyControllerMonitoringConfigBackendsEnum `json:"backends,omitempty"`
}
