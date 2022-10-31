package shared

type ValueFilter struct {
	OperatorName *string `json:"operatorName,omitempty"`
	Value        *Value  `json:"value,omitempty"`
}
