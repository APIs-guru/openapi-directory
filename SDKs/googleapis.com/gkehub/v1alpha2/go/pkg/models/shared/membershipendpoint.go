package shared

// MembershipEndpoint
// MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
type MembershipEndpoint struct {
	ApplianceCluster   *ApplianceCluster   `json:"applianceCluster,omitempty"`
	EdgeCluster        *EdgeCluster        `json:"edgeCluster,omitempty"`
	GkeCluster         *GkeCluster         `json:"gkeCluster,omitempty"`
	KubernetesMetadata *KubernetesMetadata `json:"kubernetesMetadata,omitempty"`
	KubernetesResource *KubernetesResource `json:"kubernetesResource,omitempty"`
	MultiCloudCluster  *MultiCloudCluster  `json:"multiCloudCluster,omitempty"`
	OnPremCluster      *OnPremCluster      `json:"onPremCluster,omitempty"`
}

// MembershipEndpointInput
// MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
type MembershipEndpointInput struct {
	ApplianceCluster   *ApplianceCluster        `json:"applianceCluster,omitempty"`
	EdgeCluster        *EdgeCluster             `json:"edgeCluster,omitempty"`
	GkeCluster         *GkeClusterInput         `json:"gkeCluster,omitempty"`
	KubernetesResource *KubernetesResourceInput `json:"kubernetesResource,omitempty"`
	MultiCloudCluster  *MultiCloudClusterInput  `json:"multiCloudCluster,omitempty"`
	OnPremCluster      *OnPremClusterInput      `json:"onPremCluster,omitempty"`
}
