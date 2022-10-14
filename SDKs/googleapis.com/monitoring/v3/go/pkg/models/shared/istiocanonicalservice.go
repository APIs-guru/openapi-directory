package shared

type IstioCanonicalService struct {
	CanonicalService          *string `json:"canonicalService,omitempty"`
	CanonicalServiceNamespace *string `json:"canonicalServiceNamespace,omitempty"`
	MeshUID                   *string `json:"meshUid,omitempty"`
}
