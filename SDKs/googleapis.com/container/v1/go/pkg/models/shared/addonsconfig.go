package shared

// AddonsConfig
// Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
type AddonsConfig struct {
	CloudRunConfig                   *CloudRunConfig                   `json:"cloudRunConfig,omitempty"`
	ConfigConnectorConfig            *ConfigConnectorConfig            `json:"configConnectorConfig,omitempty"`
	DNSCacheConfig                   *DNSCacheConfig                   `json:"dnsCacheConfig,omitempty"`
	GcePersistentDiskCsiDriverConfig *GcePersistentDiskCsiDriverConfig `json:"gcePersistentDiskCsiDriverConfig,omitempty"`
	GcpFilestoreCsiDriverConfig      *GcpFilestoreCsiDriverConfig      `json:"gcpFilestoreCsiDriverConfig,omitempty"`
	GkeBackupAgentConfig             *GkeBackupAgentConfig             `json:"gkeBackupAgentConfig,omitempty"`
	HorizontalPodAutoscaling         *HorizontalPodAutoscaling         `json:"horizontalPodAutoscaling,omitempty"`
	HTTPLoadBalancing                *HTTPLoadBalancing                `json:"httpLoadBalancing,omitempty"`
	KubernetesDashboard              *KubernetesDashboard              `json:"kubernetesDashboard,omitempty"`
	NetworkPolicyConfig              *NetworkPolicyConfig              `json:"networkPolicyConfig,omitempty"`
}
