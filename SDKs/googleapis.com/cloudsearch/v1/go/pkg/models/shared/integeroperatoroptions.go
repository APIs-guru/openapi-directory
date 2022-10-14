package shared

type IntegerOperatorOptions struct {
	GreaterThanOperatorName *string `json:"greaterThanOperatorName,omitempty"`
	LessThanOperatorName    *string `json:"lessThanOperatorName,omitempty"`
	OperatorName            *string `json:"operatorName,omitempty"`
}
