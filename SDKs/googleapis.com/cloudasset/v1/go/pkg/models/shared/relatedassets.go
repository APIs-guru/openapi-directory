package shared

type RelatedAssets struct {
	Assets                 []RelatedAsset          `json:"assets,omitempty"`
	RelationshipAttributes *RelationshipAttributes `json:"relationshipAttributes,omitempty"`
}
