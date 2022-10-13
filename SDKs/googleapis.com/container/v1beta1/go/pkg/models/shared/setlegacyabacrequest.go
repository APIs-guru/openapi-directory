package shared

type SetLegacyAbacRequest struct {
	ClusterID *string `json:"clusterId"`
	Enabled   *bool   `json:"enabled"`
	Name      *string `json:"name"`
	ProjectID *string `json:"projectId"`
	Zone      *string `json:"zone"`
}
