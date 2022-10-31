package shared

type RollbackNodePoolUpgradeRequest struct {
	ClusterID  *string `json:"clusterId,omitempty"`
	Name       *string `json:"name,omitempty"`
	NodePoolID *string `json:"nodePoolId,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
	RespectPdb *bool   `json:"respectPdb,omitempty"`
	Zone       *string `json:"zone,omitempty"`
}
