package shared

type MemberRestriction struct {
	Evaluation *RestrictionEvaluation `json:"evaluation"`
	Query      *string                `json:"query"`
}
