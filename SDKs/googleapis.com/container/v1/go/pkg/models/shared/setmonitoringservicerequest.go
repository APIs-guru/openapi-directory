package shared

type SetMonitoringServiceRequest struct {
	ClusterID         *string `json:"clusterId"`
	MonitoringService *string `json:"monitoringService"`
	Name              *string `json:"name"`
	ProjectID         *string `json:"projectId"`
	Zone              *string `json:"zone"`
}
