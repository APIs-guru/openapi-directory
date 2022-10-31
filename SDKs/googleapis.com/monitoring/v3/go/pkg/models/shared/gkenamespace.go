package shared

type GkeNamespace struct {
	ClusterName   *string `json:"clusterName,omitempty"`
	Location      *string `json:"location,omitempty"`
	NamespaceName *string `json:"namespaceName,omitempty"`
	ProjectID     *string `json:"projectId,omitempty"`
}
