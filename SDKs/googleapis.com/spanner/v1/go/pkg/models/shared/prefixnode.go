package shared



type PrefixNode struct {
    DataSourceNode *bool `json:"dataSourceNode,omitempty"`
    Depth *int32 `json:"depth,omitempty"`
    EndIndex *int32 `json:"endIndex,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    Word *string `json:"word,omitempty"`
    
}

