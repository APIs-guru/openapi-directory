package shared

// GkeClusterConfig
// The cluster's GKE config.
type GkeClusterConfig struct {
	GkeClusterTarget              *string                        `json:"gkeClusterTarget,omitempty"`
	NamespacedGkeDeploymentTarget *NamespacedGkeDeploymentTarget `json:"namespacedGkeDeploymentTarget,omitempty"`
	NodePoolTarget                []GkeNodePoolTarget            `json:"nodePoolTarget,omitempty"`
}
