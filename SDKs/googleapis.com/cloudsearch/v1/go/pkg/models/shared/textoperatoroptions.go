package shared

// TextOperatorOptions
// Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type TextOperatorOptions struct {
	ExactMatchWithOperator *bool   `json:"exactMatchWithOperator,omitempty"`
	OperatorName           *string `json:"operatorName,omitempty"`
}
