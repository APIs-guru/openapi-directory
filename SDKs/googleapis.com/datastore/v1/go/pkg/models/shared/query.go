package shared

type Query struct {
	DistinctOn  []PropertyReference `json:"distinctOn"`
	EndCursor   *string             `json:"endCursor"`
	Filter      *Filter             `json:"filter"`
	Kind        []KindExpression    `json:"kind"`
	Limit       *int32              `json:"limit"`
	Offset      *int32              `json:"offset"`
	Order       []PropertyOrder     `json:"order"`
	Projection  []Projection        `json:"projection"`
	StartCursor *string             `json:"startCursor"`
}
