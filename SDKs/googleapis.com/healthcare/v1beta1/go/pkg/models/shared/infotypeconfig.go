package shared

type InfoTypeConfig struct {
	EvaluateList   *FilterList `json:"evaluateList"`
	IgnoreList     *FilterList `json:"ignoreList"`
	StrictMatching *bool       `json:"strictMatching"`
}
