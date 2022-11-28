package shared

// ValueCount
// Tuple for how many times an Expression was evaluated to a particular ExpressionValue.
type ValueCount struct {
	Count *int32       `json:"count,omitempty"`
	Value *interface{} `json:"value,omitempty"`
}
