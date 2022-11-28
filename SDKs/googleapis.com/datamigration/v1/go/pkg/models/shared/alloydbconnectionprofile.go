package shared

// AlloyDbConnectionProfileInput
// Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
type AlloyDbConnectionProfileInput struct {
	ClusterID *string               `json:"clusterId,omitempty"`
	Settings  *AlloyDbSettingsInput `json:"settings,omitempty"`
}

// AlloyDbConnectionProfile
// Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
type AlloyDbConnectionProfile struct {
	ClusterID *string          `json:"clusterId,omitempty"`
	Settings  *AlloyDbSettings `json:"settings,omitempty"`
}
