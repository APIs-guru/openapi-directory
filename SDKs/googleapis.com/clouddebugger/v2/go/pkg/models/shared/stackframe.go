package shared

type StackFrame struct {
	Arguments []Variable      `json:"arguments"`
	Function  *string         `json:"function"`
	Locals    []Variable      `json:"locals"`
	Location  *SourceLocation `json:"location"`
}
