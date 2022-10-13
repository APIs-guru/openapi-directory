package shared

type MembershipEndpoint struct {
	ApplianceCluster   *ApplianceCluster   `json:"applianceCluster"`
	EdgeCluster        *EdgeCluster        `json:"edgeCluster"`
	GkeCluster         *GkeCluster         `json:"gkeCluster"`
	KubernetesMetadata *KubernetesMetadata `json:"kubernetesMetadata"`
	KubernetesResource *KubernetesResource `json:"kubernetesResource"`
	MultiCloudCluster  *MultiCloudCluster  `json:"multiCloudCluster"`
	OnPremCluster      *OnPremCluster      `json:"onPremCluster"`
}
