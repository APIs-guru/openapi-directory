package shared

type ClusterConfiguration struct {
	Clustering   *ClusterConfigurationClustering `json:"clustering"`
	ResponseType *string                         `json:"response_type"`
	Routing      *ClusterConfigurationRouting    `json:"routing"`
}
