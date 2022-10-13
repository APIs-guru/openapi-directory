package shared

type RelatedAsset struct {
	Ancestors        []string `json:"ancestors"`
	Asset            *string  `json:"asset"`
	AssetType        *string  `json:"assetType"`
	RelationshipType *string  `json:"relationshipType"`
}
