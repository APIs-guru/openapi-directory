package shared

type NodeMatcher struct {
	NodeID        *StringMatcher  `json:"nodeId"`
	NodeMetadatas []StructMatcher `json:"nodeMetadatas"`
}
