package shared

type MembershipRoleRestrictionEvaluationStateEnum string

const (
	MembershipRoleRestrictionEvaluationStateEnumStateUnspecified MembershipRoleRestrictionEvaluationStateEnum = "STATE_UNSPECIFIED"
	MembershipRoleRestrictionEvaluationStateEnumCompliant        MembershipRoleRestrictionEvaluationStateEnum = "COMPLIANT"
	MembershipRoleRestrictionEvaluationStateEnumForwardCompliant MembershipRoleRestrictionEvaluationStateEnum = "FORWARD_COMPLIANT"
	MembershipRoleRestrictionEvaluationStateEnumNonCompliant     MembershipRoleRestrictionEvaluationStateEnum = "NON_COMPLIANT"
	MembershipRoleRestrictionEvaluationStateEnumEvaluating       MembershipRoleRestrictionEvaluationStateEnum = "EVALUATING"
)

// MembershipRoleRestrictionEvaluation
// The evaluated state of this restriction.
type MembershipRoleRestrictionEvaluation struct {
	State *MembershipRoleRestrictionEvaluationStateEnum `json:"state,omitempty"`
}
