package shared

// GkeNamespaceInput
// GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
type GkeNamespaceInput struct {
	ClusterName   *string `json:"clusterName,omitempty"`
	Location      *string `json:"location,omitempty"`
	NamespaceName *string `json:"namespaceName,omitempty"`
}

// GkeNamespace
// GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
type GkeNamespace struct {
	ClusterName   *string `json:"clusterName,omitempty"`
	Location      *string `json:"location,omitempty"`
	NamespaceName *string `json:"namespaceName,omitempty"`
	ProjectID     *string `json:"projectId,omitempty"`
}
