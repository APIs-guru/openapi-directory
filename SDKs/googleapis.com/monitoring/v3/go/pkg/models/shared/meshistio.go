package shared



type MeshIstio struct {
    MeshUID *string `json:"meshUid,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    ServiceNamespace *string `json:"serviceNamespace,omitempty"`
    
}

