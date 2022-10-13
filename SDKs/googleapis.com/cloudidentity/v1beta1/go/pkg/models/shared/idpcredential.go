package shared

type IdpCredential struct {
	DsaKeyInfo *DsaPublicKeyInfo `json:"dsaKeyInfo"`
	Name       *string           `json:"name"`
	RsaKeyInfo *RsaPublicKeyInfo `json:"rsaKeyInfo"`
	UpdateTime *string           `json:"updateTime"`
}
