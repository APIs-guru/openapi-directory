package shared

type AddonsConfig struct {
	CloudRunConfig                   *CloudRunConfig                   `json:"cloudRunConfig"`
	ConfigConnectorConfig            *ConfigConnectorConfig            `json:"configConnectorConfig"`
	DNSCacheConfig                   *DNSCacheConfig                   `json:"dnsCacheConfig"`
	GcePersistentDiskCsiDriverConfig *GcePersistentDiskCsiDriverConfig `json:"gcePersistentDiskCsiDriverConfig"`
	GcpFilestoreCsiDriverConfig      *GcpFilestoreCsiDriverConfig      `json:"gcpFilestoreCsiDriverConfig"`
	GkeBackupAgentConfig             *GkeBackupAgentConfig             `json:"gkeBackupAgentConfig"`
	HorizontalPodAutoscaling         *HorizontalPodAutoscaling         `json:"horizontalPodAutoscaling"`
	HTTPLoadBalancing                *HTTPLoadBalancing                `json:"httpLoadBalancing"`
	KubernetesDashboard              *KubernetesDashboard              `json:"kubernetesDashboard"`
	NetworkPolicyConfig              *NetworkPolicyConfig              `json:"networkPolicyConfig"`
}
