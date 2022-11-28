package shared

type Cvssv3AttackComplexityEnum string

const (
	Cvssv3AttackComplexityEnumAttackComplexityUnspecified Cvssv3AttackComplexityEnum = "ATTACK_COMPLEXITY_UNSPECIFIED"
	Cvssv3AttackComplexityEnumAttackComplexityLow         Cvssv3AttackComplexityEnum = "ATTACK_COMPLEXITY_LOW"
	Cvssv3AttackComplexityEnumAttackComplexityHigh        Cvssv3AttackComplexityEnum = "ATTACK_COMPLEXITY_HIGH"
)

type Cvssv3AttackVectorEnum string

const (
	Cvssv3AttackVectorEnumAttackVectorUnspecified Cvssv3AttackVectorEnum = "ATTACK_VECTOR_UNSPECIFIED"
	Cvssv3AttackVectorEnumAttackVectorNetwork     Cvssv3AttackVectorEnum = "ATTACK_VECTOR_NETWORK"
	Cvssv3AttackVectorEnumAttackVectorAdjacent    Cvssv3AttackVectorEnum = "ATTACK_VECTOR_ADJACENT"
	Cvssv3AttackVectorEnumAttackVectorLocal       Cvssv3AttackVectorEnum = "ATTACK_VECTOR_LOCAL"
	Cvssv3AttackVectorEnumAttackVectorPhysical    Cvssv3AttackVectorEnum = "ATTACK_VECTOR_PHYSICAL"
)

type Cvssv3AvailabilityImpactEnum string

const (
	Cvssv3AvailabilityImpactEnumImpactUnspecified Cvssv3AvailabilityImpactEnum = "IMPACT_UNSPECIFIED"
	Cvssv3AvailabilityImpactEnumImpactHigh        Cvssv3AvailabilityImpactEnum = "IMPACT_HIGH"
	Cvssv3AvailabilityImpactEnumImpactLow         Cvssv3AvailabilityImpactEnum = "IMPACT_LOW"
	Cvssv3AvailabilityImpactEnumImpactNone        Cvssv3AvailabilityImpactEnum = "IMPACT_NONE"
)

type Cvssv3ConfidentialityImpactEnum string

const (
	Cvssv3ConfidentialityImpactEnumImpactUnspecified Cvssv3ConfidentialityImpactEnum = "IMPACT_UNSPECIFIED"
	Cvssv3ConfidentialityImpactEnumImpactHigh        Cvssv3ConfidentialityImpactEnum = "IMPACT_HIGH"
	Cvssv3ConfidentialityImpactEnumImpactLow         Cvssv3ConfidentialityImpactEnum = "IMPACT_LOW"
	Cvssv3ConfidentialityImpactEnumImpactNone        Cvssv3ConfidentialityImpactEnum = "IMPACT_NONE"
)

type Cvssv3IntegrityImpactEnum string

const (
	Cvssv3IntegrityImpactEnumImpactUnspecified Cvssv3IntegrityImpactEnum = "IMPACT_UNSPECIFIED"
	Cvssv3IntegrityImpactEnumImpactHigh        Cvssv3IntegrityImpactEnum = "IMPACT_HIGH"
	Cvssv3IntegrityImpactEnumImpactLow         Cvssv3IntegrityImpactEnum = "IMPACT_LOW"
	Cvssv3IntegrityImpactEnumImpactNone        Cvssv3IntegrityImpactEnum = "IMPACT_NONE"
)

type Cvssv3PrivilegesRequiredEnum string

const (
	Cvssv3PrivilegesRequiredEnumPrivilegesRequiredUnspecified Cvssv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_UNSPECIFIED"
	Cvssv3PrivilegesRequiredEnumPrivilegesRequiredNone        Cvssv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_NONE"
	Cvssv3PrivilegesRequiredEnumPrivilegesRequiredLow         Cvssv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_LOW"
	Cvssv3PrivilegesRequiredEnumPrivilegesRequiredHigh        Cvssv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_HIGH"
)

type Cvssv3ScopeEnum string

const (
	Cvssv3ScopeEnumScopeUnspecified Cvssv3ScopeEnum = "SCOPE_UNSPECIFIED"
	Cvssv3ScopeEnumScopeUnchanged   Cvssv3ScopeEnum = "SCOPE_UNCHANGED"
	Cvssv3ScopeEnumScopeChanged     Cvssv3ScopeEnum = "SCOPE_CHANGED"
)

type Cvssv3UserInteractionEnum string

const (
	Cvssv3UserInteractionEnumUserInteractionUnspecified Cvssv3UserInteractionEnum = "USER_INTERACTION_UNSPECIFIED"
	Cvssv3UserInteractionEnumUserInteractionNone        Cvssv3UserInteractionEnum = "USER_INTERACTION_NONE"
	Cvssv3UserInteractionEnumUserInteractionRequired    Cvssv3UserInteractionEnum = "USER_INTERACTION_REQUIRED"
)

// Cvssv3
// Common Vulnerability Scoring System version 3.
type Cvssv3 struct {
	AttackComplexity      *Cvssv3AttackComplexityEnum      `json:"attackComplexity,omitempty"`
	AttackVector          *Cvssv3AttackVectorEnum          `json:"attackVector,omitempty"`
	AvailabilityImpact    *Cvssv3AvailabilityImpactEnum    `json:"availabilityImpact,omitempty"`
	BaseScore             *float64                         `json:"baseScore,omitempty"`
	ConfidentialityImpact *Cvssv3ConfidentialityImpactEnum `json:"confidentialityImpact,omitempty"`
	IntegrityImpact       *Cvssv3IntegrityImpactEnum       `json:"integrityImpact,omitempty"`
	PrivilegesRequired    *Cvssv3PrivilegesRequiredEnum    `json:"privilegesRequired,omitempty"`
	Scope                 *Cvssv3ScopeEnum                 `json:"scope,omitempty"`
	UserInteraction       *Cvssv3UserInteractionEnum       `json:"userInteraction,omitempty"`
}
