package shared

type NodeMatcher struct {
	NodeID        *StringMatcher  `json:"nodeId,omitempty"`
	NodeMetadatas []StructMatcher `json:"nodeMetadatas,omitempty"`
}
