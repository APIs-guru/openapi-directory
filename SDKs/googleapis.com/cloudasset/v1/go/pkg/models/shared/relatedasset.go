package shared

type RelatedAsset struct {
	Ancestors        []string `json:"ancestors,omitempty"`
	Asset            *string  `json:"asset,omitempty"`
	AssetType        *string  `json:"assetType,omitempty"`
	RelationshipType *string  `json:"relationshipType,omitempty"`
}
