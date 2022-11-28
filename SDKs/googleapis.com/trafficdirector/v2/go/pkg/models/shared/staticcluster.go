package shared

// StaticCluster
// Describes a statically loaded cluster.
type StaticCluster struct {
	Cluster     map[string]interface{} `json:"cluster,omitempty"`
	LastUpdated *string                `json:"lastUpdated,omitempty"`
}
