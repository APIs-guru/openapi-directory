package shared



type GkeWorkload struct {
    ClusterName *string `json:"clusterName,omitempty"`
    Location *string `json:"location,omitempty"`
    NamespaceName *string `json:"namespaceName,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    TopLevelControllerName *string `json:"topLevelControllerName,omitempty"`
    TopLevelControllerType *string `json:"topLevelControllerType,omitempty"`
    
}

