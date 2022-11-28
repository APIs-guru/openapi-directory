package shared

// StartIPRotationRequest
// StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
type StartIPRotationRequest struct {
	ClusterID         *string `json:"clusterId,omitempty"`
	Name              *string `json:"name,omitempty"`
	ProjectID         *string `json:"projectId,omitempty"`
	RotateCredentials *bool   `json:"rotateCredentials,omitempty"`
	Zone              *string `json:"zone,omitempty"`
}
