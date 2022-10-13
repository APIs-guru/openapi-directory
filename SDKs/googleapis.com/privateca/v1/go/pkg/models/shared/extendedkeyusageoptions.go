package shared

type ExtendedKeyUsageOptions struct {
	ClientAuth      *bool `json:"clientAuth"`
	CodeSigning     *bool `json:"codeSigning"`
	EmailProtection *bool `json:"emailProtection"`
	OcspSigning     *bool `json:"ocspSigning"`
	ServerAuth      *bool `json:"serverAuth"`
	TimeStamping    *bool `json:"timeStamping"`
}
