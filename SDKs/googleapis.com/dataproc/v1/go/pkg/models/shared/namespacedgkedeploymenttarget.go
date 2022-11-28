package shared

// NamespacedGkeDeploymentTarget
// Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
type NamespacedGkeDeploymentTarget struct {
	ClusterNamespace *string `json:"clusterNamespace,omitempty"`
	TargetGkeCluster *string `json:"targetGkeCluster,omitempty"`
}
