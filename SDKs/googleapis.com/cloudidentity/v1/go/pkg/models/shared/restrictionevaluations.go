package shared

// RestrictionEvaluations
// Evaluations of restrictions applied to parent group on this membership.
type RestrictionEvaluations struct {
	MemberRestrictionEvaluation *MembershipRoleRestrictionEvaluation `json:"memberRestrictionEvaluation,omitempty"`
}
