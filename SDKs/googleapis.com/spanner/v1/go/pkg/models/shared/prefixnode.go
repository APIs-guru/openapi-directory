package shared

type PrefixNode struct {
	DataSourceNode *bool   `json:"dataSourceNode"`
	Depth          *int32  `json:"depth"`
	EndIndex       *int32  `json:"endIndex"`
	StartIndex     *int32  `json:"startIndex"`
	Word           *string `json:"word"`
}
