package shared

type TLSCertificate struct {
	Cert            *string `json:"cert"`
	CreateTime      *string `json:"createTime"`
	ExpireTime      *string `json:"expireTime"`
	SerialNumber    *string `json:"serialNumber"`
	Sha1Fingerprint *string `json:"sha1Fingerprint"`
}
