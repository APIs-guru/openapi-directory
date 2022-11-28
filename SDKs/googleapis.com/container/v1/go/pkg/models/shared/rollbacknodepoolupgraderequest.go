package shared

// RollbackNodePoolUpgradeRequest
// RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
type RollbackNodePoolUpgradeRequest struct {
	ClusterID  *string `json:"clusterId,omitempty"`
	Name       *string `json:"name,omitempty"`
	NodePoolID *string `json:"nodePoolId,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
	RespectPdb *bool   `json:"respectPdb,omitempty"`
	Zone       *string `json:"zone,omitempty"`
}
