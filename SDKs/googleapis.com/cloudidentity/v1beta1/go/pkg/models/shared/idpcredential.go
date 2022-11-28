package shared

// IdpCredential
// Credential for verifying signatures produced by the Identity Provider.
type IdpCredential struct {
	DsaKeyInfo *DsaPublicKeyInfo `json:"dsaKeyInfo,omitempty"`
	Name       *string           `json:"name,omitempty"`
	RsaKeyInfo *RsaPublicKeyInfo `json:"rsaKeyInfo,omitempty"`
	UpdateTime *string           `json:"updateTime,omitempty"`
}
