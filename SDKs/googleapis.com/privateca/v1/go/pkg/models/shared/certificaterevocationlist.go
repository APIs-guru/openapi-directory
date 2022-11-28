package shared

type CertificateRevocationListStateEnum string

const (
	CertificateRevocationListStateEnumStateUnspecified CertificateRevocationListStateEnum = "STATE_UNSPECIFIED"
	CertificateRevocationListStateEnumActive           CertificateRevocationListStateEnum = "ACTIVE"
	CertificateRevocationListStateEnumSuperseded       CertificateRevocationListStateEnum = "SUPERSEDED"
)

// CertificateRevocationList
// A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
type CertificateRevocationList struct {
	AccessURL           *string                             `json:"accessUrl,omitempty"`
	CreateTime          *string                             `json:"createTime,omitempty"`
	Labels              map[string]string                   `json:"labels,omitempty"`
	Name                *string                             `json:"name,omitempty"`
	PemCrl              *string                             `json:"pemCrl,omitempty"`
	RevisionID          *string                             `json:"revisionId,omitempty"`
	RevokedCertificates []RevokedCertificate                `json:"revokedCertificates,omitempty"`
	SequenceNumber      *string                             `json:"sequenceNumber,omitempty"`
	State               *CertificateRevocationListStateEnum `json:"state,omitempty"`
	UpdateTime          *string                             `json:"updateTime,omitempty"`
}
