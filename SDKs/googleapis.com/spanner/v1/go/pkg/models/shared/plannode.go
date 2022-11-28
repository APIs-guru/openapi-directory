package shared

type PlanNodeKindEnum string

const (
	PlanNodeKindEnumKindUnspecified PlanNodeKindEnum = "KIND_UNSPECIFIED"
	PlanNodeKindEnumRelational      PlanNodeKindEnum = "RELATIONAL"
	PlanNodeKindEnumScalar          PlanNodeKindEnum = "SCALAR"
)

// PlanNode
// Node information for nodes appearing in a QueryPlan.plan_nodes.
type PlanNode struct {
	ChildLinks          []ChildLink            `json:"childLinks,omitempty"`
	DisplayName         *string                `json:"displayName,omitempty"`
	ExecutionStats      map[string]interface{} `json:"executionStats,omitempty"`
	Index               *int32                 `json:"index,omitempty"`
	Kind                *PlanNodeKindEnum      `json:"kind,omitempty"`
	Metadata            map[string]interface{} `json:"metadata,omitempty"`
	ShortRepresentation *ShortRepresentation   `json:"shortRepresentation,omitempty"`
}
