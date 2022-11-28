package shared

// DoubleOperatorOptions
// Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type DoubleOperatorOptions struct {
	OperatorName *string `json:"operatorName,omitempty"`
}
