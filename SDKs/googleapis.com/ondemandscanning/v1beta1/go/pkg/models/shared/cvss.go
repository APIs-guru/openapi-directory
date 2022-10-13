package shared

type CvssAttackComplexityEnum string

const (
	CvssAttackComplexityEnumAttackComplexityUnspecified CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_UNSPECIFIED"
	CvssAttackComplexityEnumAttackComplexityLow         CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_LOW"
	CvssAttackComplexityEnumAttackComplexityHigh        CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_HIGH"
)

type CvssAttackVectorEnum string

const (
	CvssAttackVectorEnumAttackVectorUnspecified CvssAttackVectorEnum = "ATTACK_VECTOR_UNSPECIFIED"
	CvssAttackVectorEnumAttackVectorNetwork     CvssAttackVectorEnum = "ATTACK_VECTOR_NETWORK"
	CvssAttackVectorEnumAttackVectorAdjacent    CvssAttackVectorEnum = "ATTACK_VECTOR_ADJACENT"
	CvssAttackVectorEnumAttackVectorLocal       CvssAttackVectorEnum = "ATTACK_VECTOR_LOCAL"
	CvssAttackVectorEnumAttackVectorPhysical    CvssAttackVectorEnum = "ATTACK_VECTOR_PHYSICAL"
)

type CvssAuthenticationEnum string

const (
	CvssAuthenticationEnumAuthenticationUnspecified CvssAuthenticationEnum = "AUTHENTICATION_UNSPECIFIED"
	CvssAuthenticationEnumAuthenticationMultiple    CvssAuthenticationEnum = "AUTHENTICATION_MULTIPLE"
	CvssAuthenticationEnumAuthenticationSingle      CvssAuthenticationEnum = "AUTHENTICATION_SINGLE"
	CvssAuthenticationEnumAuthenticationNone        CvssAuthenticationEnum = "AUTHENTICATION_NONE"
)

type CvssAvailabilityImpactEnum string

const (
	CvssAvailabilityImpactEnumImpactUnspecified CvssAvailabilityImpactEnum = "IMPACT_UNSPECIFIED"
	CvssAvailabilityImpactEnumImpactHigh        CvssAvailabilityImpactEnum = "IMPACT_HIGH"
	CvssAvailabilityImpactEnumImpactLow         CvssAvailabilityImpactEnum = "IMPACT_LOW"
	CvssAvailabilityImpactEnumImpactNone        CvssAvailabilityImpactEnum = "IMPACT_NONE"
)

type CvssConfidentialityImpactEnum string

const (
	CvssConfidentialityImpactEnumImpactUnspecified CvssConfidentialityImpactEnum = "IMPACT_UNSPECIFIED"
	CvssConfidentialityImpactEnumImpactHigh        CvssConfidentialityImpactEnum = "IMPACT_HIGH"
	CvssConfidentialityImpactEnumImpactLow         CvssConfidentialityImpactEnum = "IMPACT_LOW"
	CvssConfidentialityImpactEnumImpactNone        CvssConfidentialityImpactEnum = "IMPACT_NONE"
)

type CvssIntegrityImpactEnum string

const (
	CvssIntegrityImpactEnumImpactUnspecified CvssIntegrityImpactEnum = "IMPACT_UNSPECIFIED"
	CvssIntegrityImpactEnumImpactHigh        CvssIntegrityImpactEnum = "IMPACT_HIGH"
	CvssIntegrityImpactEnumImpactLow         CvssIntegrityImpactEnum = "IMPACT_LOW"
	CvssIntegrityImpactEnumImpactNone        CvssIntegrityImpactEnum = "IMPACT_NONE"
)

type CvssPrivilegesRequiredEnum string

const (
	CvssPrivilegesRequiredEnumPrivilegesRequiredUnspecified CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_UNSPECIFIED"
	CvssPrivilegesRequiredEnumPrivilegesRequiredNone        CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_NONE"
	CvssPrivilegesRequiredEnumPrivilegesRequiredLow         CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_LOW"
	CvssPrivilegesRequiredEnumPrivilegesRequiredHigh        CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_HIGH"
)

type CvssScopeEnum string

const (
	CvssScopeEnumScopeUnspecified CvssScopeEnum = "SCOPE_UNSPECIFIED"
	CvssScopeEnumScopeUnchanged   CvssScopeEnum = "SCOPE_UNCHANGED"
	CvssScopeEnumScopeChanged     CvssScopeEnum = "SCOPE_CHANGED"
)

type CvssUserInteractionEnum string

const (
	CvssUserInteractionEnumUserInteractionUnspecified CvssUserInteractionEnum = "USER_INTERACTION_UNSPECIFIED"
	CvssUserInteractionEnumUserInteractionNone        CvssUserInteractionEnum = "USER_INTERACTION_NONE"
	CvssUserInteractionEnumUserInteractionRequired    CvssUserInteractionEnum = "USER_INTERACTION_REQUIRED"
)

type Cvss struct {
	AttackComplexity      *CvssAttackComplexityEnum      `json:"attackComplexity"`
	AttackVector          *CvssAttackVectorEnum          `json:"attackVector"`
	Authentication        *CvssAuthenticationEnum        `json:"authentication"`
	AvailabilityImpact    *CvssAvailabilityImpactEnum    `json:"availabilityImpact"`
	BaseScore             *float32                       `json:"baseScore"`
	ConfidentialityImpact *CvssConfidentialityImpactEnum `json:"confidentialityImpact"`
	ExploitabilityScore   *float32                       `json:"exploitabilityScore"`
	ImpactScore           *float32                       `json:"impactScore"`
	IntegrityImpact       *CvssIntegrityImpactEnum       `json:"integrityImpact"`
	PrivilegesRequired    *CvssPrivilegesRequiredEnum    `json:"privilegesRequired"`
	Scope                 *CvssScopeEnum                 `json:"scope"`
	UserInteraction       *CvssUserInteractionEnum       `json:"userInteraction"`
}
