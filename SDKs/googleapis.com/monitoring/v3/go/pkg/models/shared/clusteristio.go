package shared

type ClusterIstio struct {
	ClusterName      *string `json:"clusterName,omitempty"`
	Location         *string `json:"location,omitempty"`
	ServiceName      *string `json:"serviceName,omitempty"`
	ServiceNamespace *string `json:"serviceNamespace,omitempty"`
}
