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

// CertificateAuthority
// A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
type CertificateAuthority struct {
	AccessUrls                *AccessUrls                    `json:"accessUrls,omitempty"`
	CaCertificateDescriptions []CertificateDescription       `json:"caCertificateDescriptions,omitempty"`
	CertificatePolicy         *CertificateAuthorityPolicy    `json:"certificatePolicy,omitempty"`
	Config                    *CertificateConfig             `json:"config,omitempty"`
	CreateTime                *string                        `json:"createTime,omitempty"`
	DeleteTime                *string                        `json:"deleteTime,omitempty"`
	GcsBucket                 *string                        `json:"gcsBucket,omitempty"`
	IssuingOptions            *IssuingOptions                `json:"issuingOptions,omitempty"`
	KeySpec                   *KeyVersionSpec                `json:"keySpec,omitempty"`
	Labels                    map[string]string              `json:"labels,omitempty"`
	Lifetime                  *string                        `json:"lifetime,omitempty"`
	Name                      *string                        `json:"name,omitempty"`
	PemCaCertificates         []string                       `json:"pemCaCertificates,omitempty"`
	State                     *CertificateAuthorityStateEnum `json:"state,omitempty"`
	SubordinateConfig         *SubordinateConfig             `json:"subordinateConfig,omitempty"`
	Tier                      *CertificateAuthorityTierEnum  `json:"tier,omitempty"`
	Type                      *CertificateAuthorityTypeEnum  `json:"type,omitempty"`
	UpdateTime                *string                        `json:"updateTime,omitempty"`
}

// CertificateAuthorityInput
// A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
type CertificateAuthorityInput struct {
	AccessUrls        *AccessUrls                   `json:"accessUrls,omitempty"`
	CertificatePolicy *CertificateAuthorityPolicy   `json:"certificatePolicy,omitempty"`
	Config            *CertificateConfig            `json:"config,omitempty"`
	GcsBucket         *string                       `json:"gcsBucket,omitempty"`
	IssuingOptions    *IssuingOptions               `json:"issuingOptions,omitempty"`
	KeySpec           *KeyVersionSpec               `json:"keySpec,omitempty"`
	Labels            map[string]string             `json:"labels,omitempty"`
	Lifetime          *string                       `json:"lifetime,omitempty"`
	SubordinateConfig *SubordinateConfig            `json:"subordinateConfig,omitempty"`
	Tier              *CertificateAuthorityTierEnum `json:"tier,omitempty"`
	Type              *CertificateAuthorityTypeEnum `json:"type,omitempty"`
}
