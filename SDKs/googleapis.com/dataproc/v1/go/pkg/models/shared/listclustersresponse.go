package shared

type ListClustersResponse struct {
	Clusters      []Cluster `json:"clusters"`
	NextPageToken *string   `json:"nextPageToken"`
}
