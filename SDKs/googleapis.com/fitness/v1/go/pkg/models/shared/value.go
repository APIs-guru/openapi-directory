package shared

// Value
// Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
type Value struct {
	FpVal     *float64           `json:"fpVal,omitempty"`
	IntVal    *int32             `json:"intVal,omitempty"`
	MapVal    []ValueMapValEntry `json:"mapVal,omitempty"`
	StringVal *string            `json:"stringVal,omitempty"`
}
