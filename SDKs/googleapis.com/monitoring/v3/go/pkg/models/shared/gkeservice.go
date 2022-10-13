package shared

type GkeService struct {
	ClusterName   *string `json:"clusterName"`
	Location      *string `json:"location"`
	NamespaceName *string `json:"namespaceName"`
	ProjectID     *string `json:"projectId"`
	ServiceName   *string `json:"serviceName"`
}
