package shared

type CvssAttackComplexityEnum string

const (
	CvssAttackComplexityEnumAttackComplexityUnspecified CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_UNSPECIFIED"
	CvssAttackComplexityEnumAttackComplexityLow         CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_LOW"
	CvssAttackComplexityEnumAttackComplexityHigh        CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_HIGH"
	CvssAttackComplexityEnumAttackComplexityMedium      CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_MEDIUM"
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
	CvssAvailabilityImpactEnumImpactPartial     CvssAvailabilityImpactEnum = "IMPACT_PARTIAL"
	CvssAvailabilityImpactEnumImpactComplete    CvssAvailabilityImpactEnum = "IMPACT_COMPLETE"
)

type CvssConfidentialityImpactEnum string

const (
	CvssConfidentialityImpactEnumImpactUnspecified CvssConfidentialityImpactEnum = "IMPACT_UNSPECIFIED"
	CvssConfidentialityImpactEnumImpactHigh        CvssConfidentialityImpactEnum = "IMPACT_HIGH"
	CvssConfidentialityImpactEnumImpactLow         CvssConfidentialityImpactEnum = "IMPACT_LOW"
	CvssConfidentialityImpactEnumImpactNone        CvssConfidentialityImpactEnum = "IMPACT_NONE"
	CvssConfidentialityImpactEnumImpactPartial     CvssConfidentialityImpactEnum = "IMPACT_PARTIAL"
	CvssConfidentialityImpactEnumImpactComplete    CvssConfidentialityImpactEnum = "IMPACT_COMPLETE"
)

type CvssIntegrityImpactEnum string

const (
	CvssIntegrityImpactEnumImpactUnspecified CvssIntegrityImpactEnum = "IMPACT_UNSPECIFIED"
	CvssIntegrityImpactEnumImpactHigh        CvssIntegrityImpactEnum = "IMPACT_HIGH"
	CvssIntegrityImpactEnumImpactLow         CvssIntegrityImpactEnum = "IMPACT_LOW"
	CvssIntegrityImpactEnumImpactNone        CvssIntegrityImpactEnum = "IMPACT_NONE"
	CvssIntegrityImpactEnumImpactPartial     CvssIntegrityImpactEnum = "IMPACT_PARTIAL"
	CvssIntegrityImpactEnumImpactComplete    CvssIntegrityImpactEnum = "IMPACT_COMPLETE"
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

// Cvss
// Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator
type Cvss struct {
	AttackComplexity      *CvssAttackComplexityEnum      `json:"attackComplexity,omitempty"`
	AttackVector          *CvssAttackVectorEnum          `json:"attackVector,omitempty"`
	Authentication        *CvssAuthenticationEnum        `json:"authentication,omitempty"`
	AvailabilityImpact    *CvssAvailabilityImpactEnum    `json:"availabilityImpact,omitempty"`
	BaseScore             *float32                       `json:"baseScore,omitempty"`
	ConfidentialityImpact *CvssConfidentialityImpactEnum `json:"confidentialityImpact,omitempty"`
	ExploitabilityScore   *float32                       `json:"exploitabilityScore,omitempty"`
	ImpactScore           *float32                       `json:"impactScore,omitempty"`
	IntegrityImpact       *CvssIntegrityImpactEnum       `json:"integrityImpact,omitempty"`
	PrivilegesRequired    *CvssPrivilegesRequiredEnum    `json:"privilegesRequired,omitempty"`
	Scope                 *CvssScopeEnum                 `json:"scope,omitempty"`
	UserInteraction       *CvssUserInteractionEnum       `json:"userInteraction,omitempty"`
}
