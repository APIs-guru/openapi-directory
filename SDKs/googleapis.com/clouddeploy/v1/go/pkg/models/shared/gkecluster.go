package shared

type GkeCluster struct {
	Cluster    *string `json:"cluster,omitempty"`
	InternalIP *bool   `json:"internalIp,omitempty"`
}
