package shared

type RestrictionEvaluationStateEnum string

const (
	RestrictionEvaluationStateEnumStateUnspecified RestrictionEvaluationStateEnum = "STATE_UNSPECIFIED"
	RestrictionEvaluationStateEnumEvaluating       RestrictionEvaluationStateEnum = "EVALUATING"
	RestrictionEvaluationStateEnumCompliant        RestrictionEvaluationStateEnum = "COMPLIANT"
	RestrictionEvaluationStateEnumForwardCompliant RestrictionEvaluationStateEnum = "FORWARD_COMPLIANT"
	RestrictionEvaluationStateEnumNonCompliant     RestrictionEvaluationStateEnum = "NON_COMPLIANT"
)

type RestrictionEvaluation struct {
	State *RestrictionEvaluationStateEnum `json:"state,omitempty"`
}
