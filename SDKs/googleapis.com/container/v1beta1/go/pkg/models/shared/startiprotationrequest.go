package shared

type StartIPRotationRequest struct {
	ClusterID         *string `json:"clusterId"`
	Name              *string `json:"name"`
	ProjectID         *string `json:"projectId"`
	RotateCredentials *bool   `json:"rotateCredentials"`
	Zone              *string `json:"zone"`
}
