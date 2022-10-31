package shared



type AddonsConfig struct {
    CloudRunConfig *CloudRunConfig `json:"cloudRunConfig,omitempty"`
    ConfigConnectorConfig *ConfigConnectorConfig `json:"configConnectorConfig,omitempty"`
    DNSCacheConfig *DNSCacheConfig `json:"dnsCacheConfig,omitempty"`
    GcePersistentDiskCsiDriverConfig *GcePersistentDiskCsiDriverConfig `json:"gcePersistentDiskCsiDriverConfig,omitempty"`
    GcpFilestoreCsiDriverConfig *GcpFilestoreCsiDriverConfig `json:"gcpFilestoreCsiDriverConfig,omitempty"`
    GkeBackupAgentConfig *GkeBackupAgentConfig `json:"gkeBackupAgentConfig,omitempty"`
    HorizontalPodAutoscaling *HorizontalPodAutoscaling `json:"horizontalPodAutoscaling,omitempty"`
    HTTPLoadBalancing *HTTPLoadBalancing `json:"httpLoadBalancing,omitempty"`
    IstioConfig *IstioConfig `json:"istioConfig,omitempty"`
    KalmConfig *KalmConfig `json:"kalmConfig,omitempty"`
    KubernetesDashboard *KubernetesDashboard `json:"kubernetesDashboard,omitempty"`
    NetworkPolicyConfig *NetworkPolicyConfig `json:"networkPolicyConfig,omitempty"`
    
}

