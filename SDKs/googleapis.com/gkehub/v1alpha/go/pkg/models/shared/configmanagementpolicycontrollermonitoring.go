package shared

type ConfigManagementPolicyControllerMonitoringBackendsEnum string

const (
	ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified ConfigManagementPolicyControllerMonitoringBackendsEnum = "MONITORING_BACKEND_UNSPECIFIED"
	ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus                   ConfigManagementPolicyControllerMonitoringBackendsEnum = "PROMETHEUS"
	ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring              ConfigManagementPolicyControllerMonitoringBackendsEnum = "CLOUD_MONITORING"
)

// ConfigManagementPolicyControllerMonitoring
// PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
type ConfigManagementPolicyControllerMonitoring struct {
	Backends []ConfigManagementPolicyControllerMonitoringBackendsEnum `json:"backends,omitempty"`
}
