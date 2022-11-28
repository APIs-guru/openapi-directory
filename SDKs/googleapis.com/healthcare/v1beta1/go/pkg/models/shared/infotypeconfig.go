package shared

// InfoTypeConfig
// Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.
type InfoTypeConfig struct {
	EvaluateList   *FilterList `json:"evaluateList,omitempty"`
	IgnoreList     *FilterList `json:"ignoreList,omitempty"`
	StrictMatching *bool       `json:"strictMatching,omitempty"`
}
