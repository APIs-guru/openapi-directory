package shared

// SetMonitoringServiceRequest
// SetMonitoringServiceRequest sets the monitoring service of a cluster.
type SetMonitoringServiceRequest struct {
	ClusterID         *string `json:"clusterId,omitempty"`
	MonitoringService *string `json:"monitoringService,omitempty"`
	Name              *string `json:"name,omitempty"`
	ProjectID         *string `json:"projectId,omitempty"`
	Zone              *string `json:"zone,omitempty"`
}
