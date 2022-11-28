package shared

// IntegerOperatorOptions
// Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type IntegerOperatorOptions struct {
	GreaterThanOperatorName *string `json:"greaterThanOperatorName,omitempty"`
	LessThanOperatorName    *string `json:"lessThanOperatorName,omitempty"`
	OperatorName            *string `json:"operatorName,omitempty"`
}
