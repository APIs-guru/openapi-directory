package shared

// CompleteIPRotationRequest
// CompleteIPRotationRequest moves the cluster master back into single-IP mode.
type CompleteIPRotationRequest struct {
	ClusterID *string `json:"clusterId,omitempty"`
	Name      *string `json:"name,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	Zone      *string `json:"zone,omitempty"`
}
