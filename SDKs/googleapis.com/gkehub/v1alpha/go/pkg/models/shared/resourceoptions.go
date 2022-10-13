package shared

type ResourceOptions struct {
	ConnectVersion *string `json:"connectVersion"`
	K8sVersion     *string `json:"k8sVersion"`
	V1beta1Crd     *bool   `json:"v1beta1Crd"`
}
