package shared

type InfoTypeConfig struct {
	EvaluateList   *FilterList `json:"evaluateList,omitempty"`
	IgnoreList     *FilterList `json:"ignoreList,omitempty"`
	StrictMatching *bool       `json:"strictMatching,omitempty"`
}
