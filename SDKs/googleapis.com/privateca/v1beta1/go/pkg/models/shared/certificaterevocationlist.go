package shared

type CertificateRevocationListStateEnum string

const (
	CertificateRevocationListStateEnumStateUnspecified CertificateRevocationListStateEnum = "STATE_UNSPECIFIED"
	CertificateRevocationListStateEnumActive           CertificateRevocationListStateEnum = "ACTIVE"
	CertificateRevocationListStateEnumSuperseded       CertificateRevocationListStateEnum = "SUPERSEDED"
)

type CertificateRevocationList struct {
	AccessURL           *string                             `json:"accessUrl"`
	CreateTime          *string                             `json:"createTime"`
	Labels              map[string]string                   `json:"labels"`
	Name                *string                             `json:"name"`
	PemCrl              *string                             `json:"pemCrl"`
	RevokedCertificates []RevokedCertificate                `json:"revokedCertificates"`
	SequenceNumber      *string                             `json:"sequenceNumber"`
	State               *CertificateRevocationListStateEnum `json:"state"`
	UpdateTime          *string                             `json:"updateTime"`
}
