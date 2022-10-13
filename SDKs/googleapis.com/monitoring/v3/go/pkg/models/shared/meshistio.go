package shared

type MeshIstio struct {
	MeshUID          *string `json:"meshUid"`
	ServiceName      *string `json:"serviceName"`
	ServiceNamespace *string `json:"serviceNamespace"`
}
