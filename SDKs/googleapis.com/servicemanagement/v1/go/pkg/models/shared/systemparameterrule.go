package shared

type SystemParameterRule struct {
	Parameters []SystemParameter `json:"parameters"`
	Selector   *string           `json:"selector"`
}
