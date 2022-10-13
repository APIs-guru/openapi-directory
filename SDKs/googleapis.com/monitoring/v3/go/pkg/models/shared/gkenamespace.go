package shared

type GkeNamespace struct {
	ClusterName   *string `json:"clusterName"`
	Location      *string `json:"location"`
	NamespaceName *string `json:"namespaceName"`
	ProjectID     *string `json:"projectId"`
}
