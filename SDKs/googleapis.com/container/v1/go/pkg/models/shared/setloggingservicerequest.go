package shared

// SetLoggingServiceRequest
// SetLoggingServiceRequest sets the logging service of a cluster.
type SetLoggingServiceRequest struct {
	ClusterID      *string `json:"clusterId,omitempty"`
	LoggingService *string `json:"loggingService,omitempty"`
	Name           *string `json:"name,omitempty"`
	ProjectID      *string `json:"projectId,omitempty"`
	Zone           *string `json:"zone,omitempty"`
}
