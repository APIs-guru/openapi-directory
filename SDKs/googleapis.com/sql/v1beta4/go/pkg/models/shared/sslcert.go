package shared

type SslCert struct {
	Cert             *string `json:"cert,omitempty"`
	CertSerialNumber *string `json:"certSerialNumber,omitempty"`
	CommonName       *string `json:"commonName,omitempty"`
	CreateTime       *string `json:"createTime,omitempty"`
	ExpirationTime   *string `json:"expirationTime,omitempty"`
	Instance         *string `json:"instance,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	SelfLink         *string `json:"selfLink,omitempty"`
	Sha1Fingerprint  *string `json:"sha1Fingerprint,omitempty"`
}
