package shared

// ListClustersResponse
// ListClustersResponse is the result of ListClustersRequest.
type ListClustersResponse struct {
	Clusters     []Cluster `json:"clusters,omitempty"`
	MissingZones []string  `json:"missingZones,omitempty"`
}
