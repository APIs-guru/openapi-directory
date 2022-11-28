package shared

// Query
// A query for entities.
type Query struct {
	DistinctOn  []PropertyReference `json:"distinctOn,omitempty"`
	EndCursor   *string             `json:"endCursor,omitempty"`
	Filter      *Filter             `json:"filter,omitempty"`
	Kind        []KindExpression    `json:"kind,omitempty"`
	Limit       *int32              `json:"limit,omitempty"`
	Offset      *int32              `json:"offset,omitempty"`
	Order       []PropertyOrder     `json:"order,omitempty"`
	Projection  []Projection        `json:"projection,omitempty"`
	StartCursor *string             `json:"startCursor,omitempty"`
}
