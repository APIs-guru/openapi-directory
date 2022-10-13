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

type Algorithm struct {
	Objective   *AlgorithmObjectiveEnum   `json:"objective"`
	ProblemType *AlgorithmProblemTypeEnum `json:"problem_type"`
}
