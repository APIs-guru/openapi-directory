package shared

type CertificateAuthorityStateEnum string

const (
	CertificateAuthorityStateEnumStateUnspecified       CertificateAuthorityStateEnum = "STATE_UNSPECIFIED"
	CertificateAuthorityStateEnumEnabled                CertificateAuthorityStateEnum = "ENABLED"
	CertificateAuthorityStateEnumDisabled               CertificateAuthorityStateEnum = "DISABLED"
	CertificateAuthorityStateEnumStaged                 CertificateAuthorityStateEnum = "STAGED"
	CertificateAuthorityStateEnumAwaitingUserActivation CertificateAuthorityStateEnum = "AWAITING_USER_ACTIVATION"
	CertificateAuthorityStateEnumDeleted                CertificateAuthorityStateEnum = "DELETED"
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
	Config                    *CertificateConfig             `json:"config"`
	CreateTime                *string                        `json:"createTime"`
	DeleteTime                *string                        `json:"deleteTime"`
	ExpireTime                *string                        `json:"expireTime"`
	GcsBucket                 *string                        `json:"gcsBucket"`
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
