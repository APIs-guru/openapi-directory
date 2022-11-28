package shared

// WorkflowTemplatePlacementInput
// Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
type WorkflowTemplatePlacementInput struct {
	ClusterSelector *ClusterSelector     `json:"clusterSelector,omitempty"`
	ManagedCluster  *ManagedClusterInput `json:"managedCluster,omitempty"`
}

// WorkflowTemplatePlacement
// Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
type WorkflowTemplatePlacement struct {
	ClusterSelector *ClusterSelector `json:"clusterSelector,omitempty"`
	ManagedCluster  *ManagedCluster  `json:"managedCluster,omitempty"`
}
