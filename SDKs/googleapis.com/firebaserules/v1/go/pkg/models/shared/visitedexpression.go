package shared

type VisitedExpression struct {
	SourcePosition *SourcePosition `json:"sourcePosition"`
	Value          *interface{}    `json:"value"`
}
