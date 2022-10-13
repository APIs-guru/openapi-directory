package shared

type ValueFilter struct {
	OperatorName *string `json:"operatorName"`
	Value        *Value  `json:"value"`
}
