package shared

type ConditionEvaluationEvaluationValueEnum string

const (
	ConditionEvaluationEvaluationValueEnumEvaluationValueUnspecified ConditionEvaluationEvaluationValueEnum = "EVALUATION_VALUE_UNSPECIFIED"
	ConditionEvaluationEvaluationValueEnumTrue                       ConditionEvaluationEvaluationValueEnum = "TRUE"
	ConditionEvaluationEvaluationValueEnumFalse                      ConditionEvaluationEvaluationValueEnum = "FALSE"
	ConditionEvaluationEvaluationValueEnumConditional                ConditionEvaluationEvaluationValueEnum = "CONDITIONAL"
)

// ConditionEvaluation
// The Condition evaluation.
type ConditionEvaluation struct {
	EvaluationValue *ConditionEvaluationEvaluationValueEnum `json:"evaluationValue,omitempty"`
}
