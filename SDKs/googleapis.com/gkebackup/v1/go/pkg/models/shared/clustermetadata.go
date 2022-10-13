package shared

type ClusterMetadata struct {
	AnthosVersion     *string           `json:"anthosVersion"`
	BackupCrdVersions map[string]string `json:"backupCrdVersions"`
	Cluster           *string           `json:"cluster"`
	GkeVersion        *string           `json:"gkeVersion"`
	K8sVersion        *string           `json:"k8sVersion"`
}
