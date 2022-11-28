package shared

// HTMLOperatorOptions
// Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
type HTMLOperatorOptions struct {
	OperatorName *string `json:"operatorName,omitempty"`
}
