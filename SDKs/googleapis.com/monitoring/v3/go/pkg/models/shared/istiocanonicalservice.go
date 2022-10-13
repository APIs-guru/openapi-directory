package shared

type IstioCanonicalService struct {
	CanonicalService          *string `json:"canonicalService"`
	CanonicalServiceNamespace *string `json:"canonicalServiceNamespace"`
	MeshUID                   *string `json:"meshUid"`
}
