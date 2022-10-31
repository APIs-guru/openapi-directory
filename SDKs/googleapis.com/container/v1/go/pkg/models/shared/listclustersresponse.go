package shared



type ListClustersResponse struct {
    Clusters []Cluster `json:"clusters,omitempty"`
    MissingZones []string `json:"missingZones,omitempty"`
    
}

