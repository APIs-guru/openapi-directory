package shared

type VisitedExpression struct {
	SourcePosition *SourcePosition `json:"sourcePosition,omitempty"`
	Value          *interface{}    `json:"value,omitempty"`
}
