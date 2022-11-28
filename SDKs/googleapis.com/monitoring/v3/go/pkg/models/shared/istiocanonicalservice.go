package shared

// IstioCanonicalService
// Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
type IstioCanonicalService struct {
	CanonicalService          *string `json:"canonicalService,omitempty"`
	CanonicalServiceNamespace *string `json:"canonicalServiceNamespace,omitempty"`
	MeshUID                   *string `json:"meshUid,omitempty"`
}
