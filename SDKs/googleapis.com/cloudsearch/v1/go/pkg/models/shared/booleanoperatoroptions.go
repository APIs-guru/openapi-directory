package shared

// BooleanOperatorOptions
// Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type BooleanOperatorOptions struct {
	OperatorName *string `json:"operatorName,omitempty"`
}
