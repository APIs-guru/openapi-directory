package shared

// GkeService
// GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
type GkeService struct {
	ClusterName   *string `json:"clusterName,omitempty"`
	Location      *string `json:"location,omitempty"`
	NamespaceName *string `json:"namespaceName,omitempty"`
	ProjectID     *string `json:"projectId,omitempty"`
	ServiceName   *string `json:"serviceName,omitempty"`
}

// GkeServiceInput
// GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
type GkeServiceInput struct {
	ClusterName   *string `json:"clusterName,omitempty"`
	Location      *string `json:"location,omitempty"`
	NamespaceName *string `json:"namespaceName,omitempty"`
	ServiceName   *string `json:"serviceName,omitempty"`
}
