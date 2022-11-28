package shared

// GkeCluster
// Information specifying a GKE Cluster.
type GkeCluster struct {
	Cluster    *string `json:"cluster,omitempty"`
	InternalIP *bool   `json:"internalIp,omitempty"`
}
