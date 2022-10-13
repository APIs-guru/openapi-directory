package shared

type SslCert struct {
	Cert             *string `json:"cert"`
	CertSerialNumber *string `json:"certSerialNumber"`
	CommonName       *string `json:"commonName"`
	CreateTime       *string `json:"createTime"`
	ExpirationTime   *string `json:"expirationTime"`
	Instance         *string `json:"instance"`
	Kind             *string `json:"kind"`
	SelfLink         *string `json:"selfLink"`
	Sha1Fingerprint  *string `json:"sha1Fingerprint"`
}
