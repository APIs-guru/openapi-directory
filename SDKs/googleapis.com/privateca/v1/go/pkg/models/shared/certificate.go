package shared

type CertificateSubjectModeEnum string

const (
	CertificateSubjectModeEnumSubjectRequestModeUnspecified CertificateSubjectModeEnum = "SUBJECT_REQUEST_MODE_UNSPECIFIED"
	CertificateSubjectModeEnumDefault                       CertificateSubjectModeEnum = "DEFAULT"
	CertificateSubjectModeEnumReflectedSpiffe               CertificateSubjectModeEnum = "REFLECTED_SPIFFE"
)

type Certificate struct {
	CertificateDescription     *CertificateDescription     `json:"certificateDescription,omitempty"`
	CertificateTemplate        *string                     `json:"certificateTemplate,omitempty"`
	Config                     *CertificateConfig          `json:"config,omitempty"`
	CreateTime                 *string                     `json:"createTime,omitempty"`
	IssuerCertificateAuthority *string                     `json:"issuerCertificateAuthority,omitempty"`
	Labels                     map[string]string           `json:"labels,omitempty"`
	Lifetime                   *string                     `json:"lifetime,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
	PemCertificate             *string                     `json:"pemCertificate,omitempty"`
	PemCertificateChain        []string                    `json:"pemCertificateChain,omitempty"`
	PemCsr                     *string                     `json:"pemCsr,omitempty"`
	RevocationDetails          *RevocationDetails          `json:"revocationDetails,omitempty"`
	SubjectMode                *CertificateSubjectModeEnum `json:"subjectMode,omitempty"`
	UpdateTime                 *string                     `json:"updateTime,omitempty"`
}
