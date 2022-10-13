package shared

type ListClustersResponse struct {
	Clusters     []Cluster `json:"clusters"`
	MissingZones []string  `json:"missingZones"`
}
