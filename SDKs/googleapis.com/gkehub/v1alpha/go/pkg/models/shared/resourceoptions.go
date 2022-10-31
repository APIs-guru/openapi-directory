package shared



type ResourceOptions struct {
    ConnectVersion *string `json:"connectVersion,omitempty"`
    K8sVersion *string `json:"k8sVersion,omitempty"`
    V1beta1Crd *bool `json:"v1beta1Crd,omitempty"`
    
}

