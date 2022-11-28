package shared

// RelatedAssets
// DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.
type RelatedAssets struct {
	Assets                 []RelatedAsset          `json:"assets,omitempty"`
	RelationshipAttributes *RelationshipAttributes `json:"relationshipAttributes,omitempty"`
}
