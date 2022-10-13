package shared

type Value struct {
	FpVal     *float64           `json:"fpVal"`
	IntVal    *int32             `json:"intVal"`
	MapVal    []ValueMapValEntry `json:"mapVal"`
	StringVal *string            `json:"stringVal"`
}
