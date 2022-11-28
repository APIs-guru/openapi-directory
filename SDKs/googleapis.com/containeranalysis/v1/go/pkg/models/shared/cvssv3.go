package shared

type CvsSv3AttackComplexityEnum string

const (
	CvsSv3AttackComplexityEnumAttackComplexityUnspecified CvsSv3AttackComplexityEnum = "ATTACK_COMPLEXITY_UNSPECIFIED"
	CvsSv3AttackComplexityEnumAttackComplexityLow         CvsSv3AttackComplexityEnum = "ATTACK_COMPLEXITY_LOW"
	CvsSv3AttackComplexityEnumAttackComplexityHigh        CvsSv3AttackComplexityEnum = "ATTACK_COMPLEXITY_HIGH"
)

type CvsSv3AttackVectorEnum string

const (
	CvsSv3AttackVectorEnumAttackVectorUnspecified CvsSv3AttackVectorEnum = "ATTACK_VECTOR_UNSPECIFIED"
	CvsSv3AttackVectorEnumAttackVectorNetwork     CvsSv3AttackVectorEnum = "ATTACK_VECTOR_NETWORK"
	CvsSv3AttackVectorEnumAttackVectorAdjacent    CvsSv3AttackVectorEnum = "ATTACK_VECTOR_ADJACENT"
	CvsSv3AttackVectorEnumAttackVectorLocal       CvsSv3AttackVectorEnum = "ATTACK_VECTOR_LOCAL"
	CvsSv3AttackVectorEnumAttackVectorPhysical    CvsSv3AttackVectorEnum = "ATTACK_VECTOR_PHYSICAL"
)

type CvsSv3AvailabilityImpactEnum string

const (
	CvsSv3AvailabilityImpactEnumImpactUnspecified CvsSv3AvailabilityImpactEnum = "IMPACT_UNSPECIFIED"
	CvsSv3AvailabilityImpactEnumImpactHigh        CvsSv3AvailabilityImpactEnum = "IMPACT_HIGH"
	CvsSv3AvailabilityImpactEnumImpactLow         CvsSv3AvailabilityImpactEnum = "IMPACT_LOW"
	CvsSv3AvailabilityImpactEnumImpactNone        CvsSv3AvailabilityImpactEnum = "IMPACT_NONE"
)

type CvsSv3ConfidentialityImpactEnum string

const (
	CvsSv3ConfidentialityImpactEnumImpactUnspecified CvsSv3ConfidentialityImpactEnum = "IMPACT_UNSPECIFIED"
	CvsSv3ConfidentialityImpactEnumImpactHigh        CvsSv3ConfidentialityImpactEnum = "IMPACT_HIGH"
	CvsSv3ConfidentialityImpactEnumImpactLow         CvsSv3ConfidentialityImpactEnum = "IMPACT_LOW"
	CvsSv3ConfidentialityImpactEnumImpactNone        CvsSv3ConfidentialityImpactEnum = "IMPACT_NONE"
)

type CvsSv3IntegrityImpactEnum string

const (
	CvsSv3IntegrityImpactEnumImpactUnspecified CvsSv3IntegrityImpactEnum = "IMPACT_UNSPECIFIED"
	CvsSv3IntegrityImpactEnumImpactHigh        CvsSv3IntegrityImpactEnum = "IMPACT_HIGH"
	CvsSv3IntegrityImpactEnumImpactLow         CvsSv3IntegrityImpactEnum = "IMPACT_LOW"
	CvsSv3IntegrityImpactEnumImpactNone        CvsSv3IntegrityImpactEnum = "IMPACT_NONE"
)

type CvsSv3PrivilegesRequiredEnum string

const (
	CvsSv3PrivilegesRequiredEnumPrivilegesRequiredUnspecified CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_UNSPECIFIED"
	CvsSv3PrivilegesRequiredEnumPrivilegesRequiredNone        CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_NONE"
	CvsSv3PrivilegesRequiredEnumPrivilegesRequiredLow         CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_LOW"
	CvsSv3PrivilegesRequiredEnumPrivilegesRequiredHigh        CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_HIGH"
)

type CvsSv3ScopeEnum string

const (
	CvsSv3ScopeEnumScopeUnspecified CvsSv3ScopeEnum = "SCOPE_UNSPECIFIED"
	CvsSv3ScopeEnumScopeUnchanged   CvsSv3ScopeEnum = "SCOPE_UNCHANGED"
	CvsSv3ScopeEnumScopeChanged     CvsSv3ScopeEnum = "SCOPE_CHANGED"
)

type CvsSv3UserInteractionEnum string

const (
	CvsSv3UserInteractionEnumUserInteractionUnspecified CvsSv3UserInteractionEnum = "USER_INTERACTION_UNSPECIFIED"
	CvsSv3UserInteractionEnumUserInteractionNone        CvsSv3UserInteractionEnum = "USER_INTERACTION_NONE"
	CvsSv3UserInteractionEnumUserInteractionRequired    CvsSv3UserInteractionEnum = "USER_INTERACTION_REQUIRED"
)

// CvsSv3
// Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
type CvsSv3 struct {
	AttackComplexity      *CvsSv3AttackComplexityEnum      `json:"attackComplexity,omitempty"`
	AttackVector          *CvsSv3AttackVectorEnum          `json:"attackVector,omitempty"`
	AvailabilityImpact    *CvsSv3AvailabilityImpactEnum    `json:"availabilityImpact,omitempty"`
	BaseScore             *float32                         `json:"baseScore,omitempty"`
	ConfidentialityImpact *CvsSv3ConfidentialityImpactEnum `json:"confidentialityImpact,omitempty"`
	ExploitabilityScore   *float32                         `json:"exploitabilityScore,omitempty"`
	ImpactScore           *float32                         `json:"impactScore,omitempty"`
	IntegrityImpact       *CvsSv3IntegrityImpactEnum       `json:"integrityImpact,omitempty"`
	PrivilegesRequired    *CvsSv3PrivilegesRequiredEnum    `json:"privilegesRequired,omitempty"`
	Scope                 *CvsSv3ScopeEnum                 `json:"scope,omitempty"`
	UserInteraction       *CvsSv3UserInteractionEnum       `json:"userInteraction,omitempty"`
}
