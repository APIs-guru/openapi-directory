package shared



type ClusterConfiguration struct {
    Clustering *ClusterConfigurationClustering `json:"clustering,omitempty"`
    ResponseType *string `json:"response_type,omitempty"`
    Routing *ClusterConfigurationRouting `json:"routing,omitempty"`
    
}

