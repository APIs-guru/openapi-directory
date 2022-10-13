package shared

type CertificateMapEntryMatcherEnum string

const (
	CertificateMapEntryMatcherEnumMatcherUnspecified CertificateMapEntryMatcherEnum = "MATCHER_UNSPECIFIED"
	CertificateMapEntryMatcherEnumPrimary            CertificateMapEntryMatcherEnum = "PRIMARY"
)

type CertificateMapEntryStateEnum string

const (
	CertificateMapEntryStateEnumServingStateUnspecified CertificateMapEntryStateEnum = "SERVING_STATE_UNSPECIFIED"
	CertificateMapEntryStateEnumActive                  CertificateMapEntryStateEnum = "ACTIVE"
	CertificateMapEntryStateEnumPending                 CertificateMapEntryStateEnum = "PENDING"
)

type CertificateMapEntry struct {
	Certificates []string                        `json:"certificates"`
	CreateTime   *string                         `json:"createTime"`
	Description  *string                         `json:"description"`
	Hostname     *string                         `json:"hostname"`
	Labels       map[string]string               `json:"labels"`
	Matcher      *CertificateMapEntryMatcherEnum `json:"matcher"`
	Name         *string                         `json:"name"`
	State        *CertificateMapEntryStateEnum   `json:"state"`
	UpdateTime   *string                         `json:"updateTime"`
}
