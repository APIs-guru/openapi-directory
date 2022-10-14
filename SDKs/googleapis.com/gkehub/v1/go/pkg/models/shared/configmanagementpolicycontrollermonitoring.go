package shared

type ConfigManagementPolicyControllerMonitoringBackendsEnum string

const (
	ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified ConfigManagementPolicyControllerMonitoringBackendsEnum = "MONITORING_BACKEND_UNSPECIFIED"
	ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus                   ConfigManagementPolicyControllerMonitoringBackendsEnum = "PROMETHEUS"
	ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring              ConfigManagementPolicyControllerMonitoringBackendsEnum = "CLOUD_MONITORING"
)

type ConfigManagementPolicyControllerMonitoring struct {
	Backends []ConfigManagementPolicyControllerMonitoringBackendsEnum `json:"backends,omitempty"`
}
