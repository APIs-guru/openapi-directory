package shared

// ClusterIstio
// Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
type ClusterIstio struct {
	ClusterName      *string `json:"clusterName,omitempty"`
	Location         *string `json:"location,omitempty"`
	ServiceName      *string `json:"serviceName,omitempty"`
	ServiceNamespace *string `json:"serviceNamespace,omitempty"`
}
