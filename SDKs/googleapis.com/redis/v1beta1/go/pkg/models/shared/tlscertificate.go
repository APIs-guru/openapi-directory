package shared

// TLSCertificate
// TlsCertificate Resource
type TLSCertificate struct {
	Cert            *string `json:"cert,omitempty"`
	CreateTime      *string `json:"createTime,omitempty"`
	ExpireTime      *string `json:"expireTime,omitempty"`
	SerialNumber    *string `json:"serialNumber,omitempty"`
	Sha1Fingerprint *string `json:"sha1Fingerprint,omitempty"`
}
