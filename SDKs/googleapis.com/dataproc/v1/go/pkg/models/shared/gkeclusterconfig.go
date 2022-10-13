package shared

type GkeClusterConfig struct {
	GkeClusterTarget              *string                        `json:"gkeClusterTarget"`
	NamespacedGkeDeploymentTarget *NamespacedGkeDeploymentTarget `json:"namespacedGkeDeploymentTarget"`
	NodePoolTarget                []GkeNodePoolTarget            `json:"nodePoolTarget"`
}
