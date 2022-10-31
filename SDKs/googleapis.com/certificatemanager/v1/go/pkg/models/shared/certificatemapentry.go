package shared




type CertificateMapEntryMatcherEnum string

const (
    CertificateMapEntryMatcherEnumMatcherUnspecified CertificateMapEntryMatcherEnum = "MATCHER_UNSPECIFIED"
CertificateMapEntryMatcherEnumPrimary CertificateMapEntryMatcherEnum = "PRIMARY"
)



type CertificateMapEntryStateEnum string

const (
    CertificateMapEntryStateEnumServingStateUnspecified CertificateMapEntryStateEnum = "SERVING_STATE_UNSPECIFIED"
CertificateMapEntryStateEnumActive CertificateMapEntryStateEnum = "ACTIVE"
CertificateMapEntryStateEnumPending CertificateMapEntryStateEnum = "PENDING"
)


type CertificateMapEntry struct {
    Certificates []string `json:"certificates,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Hostname *string `json:"hostname,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Matcher *CertificateMapEntryMatcherEnum `json:"matcher,omitempty"`
    Name *string `json:"name,omitempty"`
    State *CertificateMapEntryStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

