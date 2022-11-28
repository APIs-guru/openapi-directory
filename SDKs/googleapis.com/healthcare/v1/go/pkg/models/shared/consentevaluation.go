package shared

type ConsentEvaluationEvaluationResultEnum string

const (
	ConsentEvaluationEvaluationResultEnumEvaluationResultUnspecified ConsentEvaluationEvaluationResultEnum = "EVALUATION_RESULT_UNSPECIFIED"
	ConsentEvaluationEvaluationResultEnumNotApplicable               ConsentEvaluationEvaluationResultEnum = "NOT_APPLICABLE"
	ConsentEvaluationEvaluationResultEnumNoMatchingPolicy            ConsentEvaluationEvaluationResultEnum = "NO_MATCHING_POLICY"
	ConsentEvaluationEvaluationResultEnumNoSatisfiedPolicy           ConsentEvaluationEvaluationResultEnum = "NO_SATISFIED_POLICY"
	ConsentEvaluationEvaluationResultEnumHasSatisfiedPolicy          ConsentEvaluationEvaluationResultEnum = "HAS_SATISFIED_POLICY"
)

// ConsentEvaluation
// The detailed evaluation of a particular Consent.
type ConsentEvaluation struct {
	EvaluationResult *ConsentEvaluationEvaluationResultEnum `json:"evaluationResult,omitempty"`
}
