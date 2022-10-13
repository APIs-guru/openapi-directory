package shared

type SingleClusterRouting struct {
	AllowTransactionalWrites *bool   `json:"allowTransactionalWrites"`
	ClusterID                *string `json:"clusterId"`
}
