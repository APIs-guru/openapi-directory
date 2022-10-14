package shared

type StartIPRotationRequest struct {
	ClusterID         *string `json:"clusterId,omitempty"`
	Name              *string `json:"name,omitempty"`
	ProjectID         *string `json:"projectId,omitempty"`
	RotateCredentials *bool   `json:"rotateCredentials,omitempty"`
	Zone              *string `json:"zone,omitempty"`
}
