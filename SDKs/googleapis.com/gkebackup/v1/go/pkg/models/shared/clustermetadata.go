package shared



type ClusterMetadata struct {
    AnthosVersion *string `json:"anthosVersion,omitempty"`
    BackupCrdVersions map[string]string `json:"backupCrdVersions,omitempty"`
    Cluster *string `json:"cluster,omitempty"`
    GkeVersion *string `json:"gkeVersion,omitempty"`
    K8sVersion *string `json:"k8sVersion,omitempty"`
    
}

