package shared

type JobPlacement struct {
	ClusterLabels map[string]string `json:"clusterLabels"`
	ClusterName   *string           `json:"clusterName"`
	ClusterUUID   *string           `json:"clusterUuid"`
}
