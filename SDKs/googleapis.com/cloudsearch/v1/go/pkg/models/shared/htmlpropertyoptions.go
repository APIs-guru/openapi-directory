package shared

type HTMLPropertyOptions struct {
	OperatorOptions     *HTMLOperatorOptions `json:"operatorOptions,omitempty"`
	RetrievalImportance *RetrievalImportance `json:"retrievalImportance,omitempty"`
}
