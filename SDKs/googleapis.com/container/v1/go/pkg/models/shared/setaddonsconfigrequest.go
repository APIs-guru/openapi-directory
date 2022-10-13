package shared

type SetAddonsConfigRequest struct {
	AddonsConfig *AddonsConfig `json:"addonsConfig"`
	ClusterID    *string       `json:"clusterId"`
	Name         *string       `json:"name"`
	ProjectID    *string       `json:"projectId"`
	Zone         *string       `json:"zone"`
}
