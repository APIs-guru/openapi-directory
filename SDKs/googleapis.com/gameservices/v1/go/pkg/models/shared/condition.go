package shared

type ConditionIamEnum string

const (
	ConditionIamEnumNoAttr            ConditionIamEnum = "NO_ATTR"
	ConditionIamEnumAuthority         ConditionIamEnum = "AUTHORITY"
	ConditionIamEnumAttribution       ConditionIamEnum = "ATTRIBUTION"
	ConditionIamEnumSecurityRealm     ConditionIamEnum = "SECURITY_REALM"
	ConditionIamEnumApprover          ConditionIamEnum = "APPROVER"
	ConditionIamEnumJustificationType ConditionIamEnum = "JUSTIFICATION_TYPE"
	ConditionIamEnumCredentialsType   ConditionIamEnum = "CREDENTIALS_TYPE"
	ConditionIamEnumCredsAssertion    ConditionIamEnum = "CREDS_ASSERTION"
)

type ConditionOpEnum string

const (
	ConditionOpEnumNoOp       ConditionOpEnum = "NO_OP"
	ConditionOpEnumEquals     ConditionOpEnum = "EQUALS"
	ConditionOpEnumNotEquals  ConditionOpEnum = "NOT_EQUALS"
	ConditionOpEnumIn         ConditionOpEnum = "IN"
	ConditionOpEnumNotIn      ConditionOpEnum = "NOT_IN"
	ConditionOpEnumDischarged ConditionOpEnum = "DISCHARGED"
)

type ConditionSysEnum string

const (
	ConditionSysEnumNoAttr  ConditionSysEnum = "NO_ATTR"
	ConditionSysEnumRegion  ConditionSysEnum = "REGION"
	ConditionSysEnumService ConditionSysEnum = "SERVICE"
	ConditionSysEnumName    ConditionSysEnum = "NAME"
	ConditionSysEnumIP      ConditionSysEnum = "IP"
)

// Condition
// A condition to be met.
type Condition struct {
	Iam    *ConditionIamEnum `json:"iam,omitempty"`
	Op     *ConditionOpEnum  `json:"op,omitempty"`
	Svc    *string           `json:"svc,omitempty"`
	Sys    *ConditionSysEnum `json:"sys,omitempty"`
	Values []string          `json:"values,omitempty"`
}
