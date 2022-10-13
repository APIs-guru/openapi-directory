package shared

type KubernetesMetadata struct {
	KubernetesAPIServerVersion *string `json:"kubernetesApiServerVersion"`
	MemoryMb                   *int32  `json:"memoryMb"`
	NodeCount                  *int32  `json:"nodeCount"`
	NodeProviderID             *string `json:"nodeProviderId"`
	UpdateTime                 *string `json:"updateTime"`
	VcpuCount                  *int32  `json:"vcpuCount"`
}
