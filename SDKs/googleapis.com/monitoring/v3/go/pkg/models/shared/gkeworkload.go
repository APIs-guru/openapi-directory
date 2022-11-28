package shared

// GkeWorkload
// A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
type GkeWorkload struct {
	ClusterName            *string `json:"clusterName,omitempty"`
	Location               *string `json:"location,omitempty"`
	NamespaceName          *string `json:"namespaceName,omitempty"`
	ProjectID              *string `json:"projectId,omitempty"`
	TopLevelControllerName *string `json:"topLevelControllerName,omitempty"`
	TopLevelControllerType *string `json:"topLevelControllerType,omitempty"`
}

// GkeWorkloadInput
// A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
type GkeWorkloadInput struct {
	ClusterName            *string `json:"clusterName,omitempty"`
	Location               *string `json:"location,omitempty"`
	NamespaceName          *string `json:"namespaceName,omitempty"`
	TopLevelControllerName *string `json:"topLevelControllerName,omitempty"`
	TopLevelControllerType *string `json:"topLevelControllerType,omitempty"`
}
