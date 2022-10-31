package shared

type GkeService struct {
	ClusterName   *string `json:"clusterName,omitempty"`
	Location      *string `json:"location,omitempty"`
	NamespaceName *string `json:"namespaceName,omitempty"`
	ProjectID     *string `json:"projectId,omitempty"`
	ServiceName   *string `json:"serviceName,omitempty"`
}
