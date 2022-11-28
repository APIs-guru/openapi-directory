package shared

// DateOperatorOptions
// Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type DateOperatorOptions struct {
	GreaterThanOperatorName *string `json:"greaterThanOperatorName,omitempty"`
	LessThanOperatorName    *string `json:"lessThanOperatorName,omitempty"`
	OperatorName            *string `json:"operatorName,omitempty"`
}
