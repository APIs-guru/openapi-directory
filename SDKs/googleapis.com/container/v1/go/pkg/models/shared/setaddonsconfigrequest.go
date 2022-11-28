package shared

// SetAddonsConfigRequest
// SetAddonsConfigRequest sets the addons associated with the cluster.
type SetAddonsConfigRequest struct {
	AddonsConfig *AddonsConfig `json:"addonsConfig,omitempty"`
	ClusterID    *string       `json:"clusterId,omitempty"`
	Name         *string       `json:"name,omitempty"`
	ProjectID    *string       `json:"projectId,omitempty"`
	Zone         *string       `json:"zone,omitempty"`
}
