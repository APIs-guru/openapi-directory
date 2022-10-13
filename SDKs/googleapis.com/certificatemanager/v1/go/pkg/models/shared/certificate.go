package shared

type CertificateScopeEnum string

const (
	CertificateScopeEnumDefault   CertificateScopeEnum = "DEFAULT"
	CertificateScopeEnumEdgeCache CertificateScopeEnum = "EDGE_CACHE"
)

type Certificate struct {
	CreateTime     *string                 `json:"createTime"`
	Description    *string                 `json:"description"`
	ExpireTime     *string                 `json:"expireTime"`
	Labels         map[string]string       `json:"labels"`
	Managed        *ManagedCertificate     `json:"managed"`
	Name           *string                 `json:"name"`
	PemCertificate *string                 `json:"pemCertificate"`
	SanDnsnames    []string                `json:"sanDnsnames"`
	Scope          *CertificateScopeEnum   `json:"scope"`
	SelfManaged    *SelfManagedCertificate `json:"selfManaged"`
	UpdateTime     *string                 `json:"updateTime"`
}
