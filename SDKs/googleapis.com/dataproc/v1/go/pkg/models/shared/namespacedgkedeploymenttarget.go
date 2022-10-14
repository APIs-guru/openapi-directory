package shared

type NamespacedGkeDeploymentTarget struct {
	ClusterNamespace *string `json:"clusterNamespace,omitempty"`
	TargetGkeCluster *string `json:"targetGkeCluster,omitempty"`
}
