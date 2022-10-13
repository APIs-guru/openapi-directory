package shared

type ClusterIstio struct {
	ClusterName      *string `json:"clusterName"`
	Location         *string `json:"location"`
	ServiceName      *string `json:"serviceName"`
	ServiceNamespace *string `json:"serviceNamespace"`
}
