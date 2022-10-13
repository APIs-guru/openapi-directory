package shared

type WorkflowTemplatePlacement struct {
	ClusterSelector *ClusterSelector `json:"clusterSelector"`
	ManagedCluster  *ManagedCluster  `json:"managedCluster"`
}
