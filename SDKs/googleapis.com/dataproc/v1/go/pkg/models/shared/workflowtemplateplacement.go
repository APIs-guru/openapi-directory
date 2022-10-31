package shared



type WorkflowTemplatePlacement struct {
    ClusterSelector *ClusterSelector `json:"clusterSelector,omitempty"`
    ManagedCluster *ManagedCluster `json:"managedCluster,omitempty"`
    
}

