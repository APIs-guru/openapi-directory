package shared

type ListClustersResponse struct {
	Clusters        []Cluster `json:"clusters,omitempty"`
	FailedLocations []string  `json:"failedLocations,omitempty"`
	NextPageToken   *string   `json:"nextPageToken,omitempty"`
}
