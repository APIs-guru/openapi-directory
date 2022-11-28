package shared

// ListClustersResponse
// The list of all clusters in a project.
type ListClustersResponse struct {
	Clusters      []Cluster `json:"clusters,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
