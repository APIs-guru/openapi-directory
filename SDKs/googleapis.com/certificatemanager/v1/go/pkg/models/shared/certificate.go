package shared

type CertificateScopeEnum string

const (
	CertificateScopeEnumDefault   CertificateScopeEnum = "DEFAULT"
	CertificateScopeEnumEdgeCache CertificateScopeEnum = "EDGE_CACHE"
)

type Certificate struct {
	CreateTime     *string                 `json:"createTime,omitempty"`
	Description    *string                 `json:"description,omitempty"`
	ExpireTime     *string                 `json:"expireTime,omitempty"`
	Labels         map[string]string       `json:"labels,omitempty"`
	Managed        *ManagedCertificate     `json:"managed,omitempty"`
	Name           *string                 `json:"name,omitempty"`
	PemCertificate *string                 `json:"pemCertificate,omitempty"`
	SanDnsnames    []string                `json:"sanDnsnames,omitempty"`
	Scope          *CertificateScopeEnum   `json:"scope,omitempty"`
	SelfManaged    *SelfManagedCertificate `json:"selfManaged,omitempty"`
	UpdateTime     *string                 `json:"updateTime,omitempty"`
}
