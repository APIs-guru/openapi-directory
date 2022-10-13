package shared

type AlloyDbConnectionProfile struct {
	ClusterID *string          `json:"clusterId"`
	Settings  *AlloyDbSettings `json:"settings"`
}
