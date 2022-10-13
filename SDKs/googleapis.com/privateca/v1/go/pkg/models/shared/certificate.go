package shared

type CertificateSubjectModeEnum string

const (
	CertificateSubjectModeEnumSubjectRequestModeUnspecified CertificateSubjectModeEnum = "SUBJECT_REQUEST_MODE_UNSPECIFIED"
	CertificateSubjectModeEnumDefault                       CertificateSubjectModeEnum = "DEFAULT"
	CertificateSubjectModeEnumReflectedSpiffe               CertificateSubjectModeEnum = "REFLECTED_SPIFFE"
)

type Certificate struct {
	CertificateDescription     *CertificateDescription     `json:"certificateDescription"`
	CertificateTemplate        *string                     `json:"certificateTemplate"`
	Config                     *CertificateConfig          `json:"config"`
	CreateTime                 *string                     `json:"createTime"`
	IssuerCertificateAuthority *string                     `json:"issuerCertificateAuthority"`
	Labels                     map[string]string           `json:"labels"`
	Lifetime                   *string                     `json:"lifetime"`
	Name                       *string                     `json:"name"`
	PemCertificate             *string                     `json:"pemCertificate"`
	PemCertificateChain        []string                    `json:"pemCertificateChain"`
	PemCsr                     *string                     `json:"pemCsr"`
	RevocationDetails          *RevocationDetails          `json:"revocationDetails"`
	SubjectMode                *CertificateSubjectModeEnum `json:"subjectMode"`
	UpdateTime                 *string                     `json:"updateTime"`
}
