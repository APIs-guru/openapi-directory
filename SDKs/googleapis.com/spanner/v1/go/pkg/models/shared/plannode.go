package shared

type PlanNodeKindEnum string

const (
	PlanNodeKindEnumKindUnspecified PlanNodeKindEnum = "KIND_UNSPECIFIED"
	PlanNodeKindEnumRelational      PlanNodeKindEnum = "RELATIONAL"
	PlanNodeKindEnumScalar          PlanNodeKindEnum = "SCALAR"
)

type PlanNode struct {
	ChildLinks          []ChildLink            `json:"childLinks"`
	DisplayName         *string                `json:"displayName"`
	ExecutionStats      map[string]interface{} `json:"executionStats"`
	Index               *int32                 `json:"index"`
	Kind                *PlanNodeKindEnum      `json:"kind"`
	Metadata            map[string]interface{} `json:"metadata"`
	ShortRepresentation *ShortRepresentation   `json:"shortRepresentation"`
}
