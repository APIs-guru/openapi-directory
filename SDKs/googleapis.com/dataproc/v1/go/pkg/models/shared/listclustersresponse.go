package shared

type ListClustersResponse struct {
	Clusters      []Cluster `json:"clusters,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
