package shared

type SetLegacyAbacRequest struct {
	ClusterID *string `json:"clusterId,omitempty"`
	Enabled   *bool   `json:"enabled,omitempty"`
	Name      *string `json:"name,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	Zone      *string `json:"zone,omitempty"`
}
