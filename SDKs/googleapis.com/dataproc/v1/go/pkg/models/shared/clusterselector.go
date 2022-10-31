package shared



type ClusterSelector struct {
    ClusterLabels map[string]string `json:"clusterLabels,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

