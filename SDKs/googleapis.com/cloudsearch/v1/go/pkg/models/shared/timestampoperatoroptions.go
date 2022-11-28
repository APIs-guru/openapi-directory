package shared

// TimestampOperatorOptions
// Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type TimestampOperatorOptions struct {
	GreaterThanOperatorName *string `json:"greaterThanOperatorName,omitempty"`
	LessThanOperatorName    *string `json:"lessThanOperatorName,omitempty"`
	OperatorName            *string `json:"operatorName,omitempty"`
}
