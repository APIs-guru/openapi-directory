package shared

type SetLoggingServiceRequest struct {
	ClusterID      *string `json:"clusterId"`
	LoggingService *string `json:"loggingService"`
	Name           *string `json:"name"`
	ProjectID      *string `json:"projectId"`
	Zone           *string `json:"zone"`
}
