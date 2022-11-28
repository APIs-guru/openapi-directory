package shared

// CreateClusterRequestInput
// CreateClusterRequest creates a cluster.
type CreateClusterRequestInput struct {
	Cluster   *ClusterInput `json:"cluster,omitempty"`
	Parent    *string       `json:"parent,omitempty"`
	ProjectID *string       `json:"projectId,omitempty"`
	Zone      *string       `json:"zone,omitempty"`
}
