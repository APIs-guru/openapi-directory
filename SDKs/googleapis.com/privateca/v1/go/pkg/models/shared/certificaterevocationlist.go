package shared




type CertificateRevocationListStateEnum string

const (
    CertificateRevocationListStateEnumStateUnspecified CertificateRevocationListStateEnum = "STATE_UNSPECIFIED"
CertificateRevocationListStateEnumActive CertificateRevocationListStateEnum = "ACTIVE"
CertificateRevocationListStateEnumSuperseded CertificateRevocationListStateEnum = "SUPERSEDED"
)


type CertificateRevocationList struct {
    AccessURL *string `json:"accessUrl,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    PemCrl *string `json:"pemCrl,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    RevokedCertificates []RevokedCertificate `json:"revokedCertificates,omitempty"`
    SequenceNumber *string `json:"sequenceNumber,omitempty"`
    State *CertificateRevocationListStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

