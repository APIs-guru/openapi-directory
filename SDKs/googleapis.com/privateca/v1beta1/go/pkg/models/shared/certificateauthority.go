package shared

type CertificateAuthorityStateEnum string

const (
	CertificateAuthorityStateEnumStateUnspecified  CertificateAuthorityStateEnum = "STATE_UNSPECIFIED"
	CertificateAuthorityStateEnumEnabled           CertificateAuthorityStateEnum = "ENABLED"
	CertificateAuthorityStateEnumDisabled          CertificateAuthorityStateEnum = "DISABLED"
	CertificateAuthorityStateEnumPendingActivation CertificateAuthorityStateEnum = "PENDING_ACTIVATION"
	CertificateAuthorityStateEnumPendingDeletion   CertificateAuthorityStateEnum = "PENDING_DELETION"
)

type CertificateAuthorityTierEnum string

const (
	CertificateAuthorityTierEnumTierUnspecified CertificateAuthorityTierEnum = "TIER_UNSPECIFIED"
	CertificateAuthorityTierEnumEnterprise      CertificateAuthorityTierEnum = "ENTERPRISE"
	CertificateAuthorityTierEnumDevops          CertificateAuthorityTierEnum = "DEVOPS"
)

type CertificateAuthorityTypeEnum string

const (
	CertificateAuthorityTypeEnumTypeUnspecified CertificateAuthorityTypeEnum = "TYPE_UNSPECIFIED"
	CertificateAuthorityTypeEnumSelfSigned      CertificateAuthorityTypeEnum = "SELF_SIGNED"
	CertificateAuthorityTypeEnumSubordinate     CertificateAuthorityTypeEnum = "SUBORDINATE"
)

type CertificateAuthority struct {
	AccessUrls                *AccessUrls                    `json:"accessUrls"`
	CaCertificateDescriptions []CertificateDescription       `json:"caCertificateDescriptions"`
	CertificatePolicy         *CertificateAuthorityPolicy    `json:"certificatePolicy"`
	Config                    *CertificateConfig             `json:"config"`
	CreateTime                *string                        `json:"createTime"`
	DeleteTime                *string                        `json:"deleteTime"`
	GcsBucket                 *string                        `json:"gcsBucket"`
	IssuingOptions            *IssuingOptions                `json:"issuingOptions"`
	KeySpec                   *KeyVersionSpec                `json:"keySpec"`
	Labels                    map[string]string              `json:"labels"`
	Lifetime                  *string                        `json:"lifetime"`
	Name                      *string                        `json:"name"`
	PemCaCertificates         []string                       `json:"pemCaCertificates"`
	State                     *CertificateAuthorityStateEnum `json:"state"`
	SubordinateConfig         *SubordinateConfig             `json:"subordinateConfig"`
	Tier                      *CertificateAuthorityTierEnum  `json:"tier"`
	Type                      *CertificateAuthorityTypeEnum  `json:"type"`
	UpdateTime                *string                        `json:"updateTime"`
}
