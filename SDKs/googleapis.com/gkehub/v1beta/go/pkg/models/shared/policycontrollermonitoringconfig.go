package shared

type PolicyControllerMonitoringConfigBackendsEnum string

const (
	PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified PolicyControllerMonitoringConfigBackendsEnum = "MONITORING_BACKEND_UNSPECIFIED"
	PolicyControllerMonitoringConfigBackendsEnumPrometheus                   PolicyControllerMonitoringConfigBackendsEnum = "PROMETHEUS"
	PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring              PolicyControllerMonitoringConfigBackendsEnum = "CLOUD_MONITORING"
)

type PolicyControllerMonitoringConfig struct {
	Backends []PolicyControllerMonitoringConfigBackendsEnum `json:"backends"`
}
