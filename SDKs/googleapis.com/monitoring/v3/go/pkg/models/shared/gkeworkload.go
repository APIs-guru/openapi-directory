package shared

type GkeWorkload struct {
	ClusterName            *string `json:"clusterName"`
	Location               *string `json:"location"`
	NamespaceName          *string `json:"namespaceName"`
	ProjectID              *string `json:"projectId"`
	TopLevelControllerName *string `json:"topLevelControllerName"`
	TopLevelControllerType *string `json:"topLevelControllerType"`
}
