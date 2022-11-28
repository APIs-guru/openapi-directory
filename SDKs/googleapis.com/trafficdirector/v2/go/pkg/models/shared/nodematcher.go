package shared

// NodeMatcher
// Specifies the way to match a Node. The match follows AND semantics.
type NodeMatcher struct {
	NodeID        *StringMatcher  `json:"nodeId,omitempty"`
	NodeMetadatas []StructMatcher `json:"nodeMetadatas,omitempty"`
}
