package shared

// VisitedExpression
// Store the position and access outcome for an expression visited in rules.
type VisitedExpression struct {
	SourcePosition *SourcePosition `json:"sourcePosition,omitempty"`
	Value          *interface{}    `json:"value,omitempty"`
}
