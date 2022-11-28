package shared

type AlgorithmObjectiveEnum string

const (
	AlgorithmObjectiveEnumTransportTime  AlgorithmObjectiveEnum = "transport_time"
	AlgorithmObjectiveEnumCompletionTime AlgorithmObjectiveEnum = "completion_time"
)

type AlgorithmProblemTypeEnum string

const (
	AlgorithmProblemTypeEnumMin    AlgorithmProblemTypeEnum = "min"
	AlgorithmProblemTypeEnumMinMax AlgorithmProblemTypeEnum = "min-max"
)

// Algorithm
// Use `objectives` instead.
type Algorithm struct {
	Objective   *AlgorithmObjectiveEnum   `json:"objective,omitempty"`
	ProblemType *AlgorithmProblemTypeEnum `json:"problem_type,omitempty"`
}
