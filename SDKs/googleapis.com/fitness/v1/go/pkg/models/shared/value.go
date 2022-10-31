package shared

type Value struct {
	FpVal     *float64           `json:"fpVal,omitempty"`
	IntVal    *int32             `json:"intVal,omitempty"`
	MapVal    []ValueMapValEntry `json:"mapVal,omitempty"`
	StringVal *string            `json:"stringVal,omitempty"`
}
