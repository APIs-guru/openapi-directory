package shared

type RollbackNodePoolUpgradeRequest struct {
	ClusterID  *string `json:"clusterId"`
	Name       *string `json:"name"`
	NodePoolID *string `json:"nodePoolId"`
	ProjectID  *string `json:"projectId"`
	RespectPdb *bool   `json:"respectPdb"`
	Zone       *string `json:"zone"`
}
