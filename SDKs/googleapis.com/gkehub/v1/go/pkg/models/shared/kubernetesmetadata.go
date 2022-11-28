package shared

// KubernetesMetadata
// KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
type KubernetesMetadata struct {
	KubernetesAPIServerVersion *string `json:"kubernetesApiServerVersion,omitempty"`
	MemoryMb                   *int32  `json:"memoryMb,omitempty"`
	NodeCount                  *int32  `json:"nodeCount,omitempty"`
	NodeProviderID             *string `json:"nodeProviderId,omitempty"`
	UpdateTime                 *string `json:"updateTime,omitempty"`
	VcpuCount                  *int32  `json:"vcpuCount,omitempty"`
}
