package shared



type MembershipEndpoint struct {
    ApplianceCluster *ApplianceCluster `json:"applianceCluster,omitempty"`
    EdgeCluster *EdgeCluster `json:"edgeCluster,omitempty"`
    GkeCluster *GkeCluster `json:"gkeCluster,omitempty"`
    KubernetesMetadata *KubernetesMetadata `json:"kubernetesMetadata,omitempty"`
    KubernetesResource *KubernetesResource `json:"kubernetesResource,omitempty"`
    MultiCloudCluster *MultiCloudCluster `json:"multiCloudCluster,omitempty"`
    OnPremCluster *OnPremCluster `json:"onPremCluster,omitempty"`
    
}

