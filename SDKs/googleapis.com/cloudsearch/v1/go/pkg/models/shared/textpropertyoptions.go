package shared

// TextPropertyOptions
// The options for text properties.
type TextPropertyOptions struct {
	OperatorOptions     *TextOperatorOptions `json:"operatorOptions,omitempty"`
	RetrievalImportance *RetrievalImportance `json:"retrievalImportance,omitempty"`
}
