package shared

// ExtendedKeyUsageOptions
// KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
type ExtendedKeyUsageOptions struct {
	ClientAuth      *bool `json:"clientAuth,omitempty"`
	CodeSigning     *bool `json:"codeSigning,omitempty"`
	EmailProtection *bool `json:"emailProtection,omitempty"`
	OcspSigning     *bool `json:"ocspSigning,omitempty"`
	ServerAuth      *bool `json:"serverAuth,omitempty"`
	TimeStamping    *bool `json:"timeStamping,omitempty"`
}
