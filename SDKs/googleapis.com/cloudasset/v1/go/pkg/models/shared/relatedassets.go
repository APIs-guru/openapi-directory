package shared

type RelatedAssets struct {
	Assets                 []RelatedAsset          `json:"assets"`
	RelationshipAttributes *RelationshipAttributes `json:"relationshipAttributes"`
}
