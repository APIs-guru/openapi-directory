package shared

// PrefixNode
// A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.
type PrefixNode struct {
	DataSourceNode *bool   `json:"dataSourceNode,omitempty"`
	Depth          *int32  `json:"depth,omitempty"`
	EndIndex       *int32  `json:"endIndex,omitempty"`
	StartIndex     *int32  `json:"startIndex,omitempty"`
	Word           *string `json:"word,omitempty"`
}
