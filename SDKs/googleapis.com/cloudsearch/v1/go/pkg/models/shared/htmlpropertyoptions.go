package shared

// HTMLPropertyOptions
// The options for html properties.
type HTMLPropertyOptions struct {
	OperatorOptions     *HTMLOperatorOptions `json:"operatorOptions,omitempty"`
	RetrievalImportance *RetrievalImportance `json:"retrievalImportance,omitempty"`
}
