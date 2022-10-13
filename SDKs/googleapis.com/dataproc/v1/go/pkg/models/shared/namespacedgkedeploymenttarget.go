package shared

type NamespacedGkeDeploymentTarget struct {
	ClusterNamespace *string `json:"clusterNamespace"`
	TargetGkeCluster *string `json:"targetGkeCluster"`
}
