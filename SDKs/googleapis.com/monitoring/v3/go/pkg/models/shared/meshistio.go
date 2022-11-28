package shared

// MeshIstio
// Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
type MeshIstio struct {
	MeshUID          *string `json:"meshUid,omitempty"`
	ServiceName      *string `json:"serviceName,omitempty"`
	ServiceNamespace *string `json:"serviceNamespace,omitempty"`
}
