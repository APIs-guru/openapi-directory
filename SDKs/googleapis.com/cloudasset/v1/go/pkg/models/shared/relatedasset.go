package shared

// RelatedAsset
// An asset identifier in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
type RelatedAsset struct {
	Ancestors        []string `json:"ancestors,omitempty"`
	Asset            *string  `json:"asset,omitempty"`
	AssetType        *string  `json:"assetType,omitempty"`
	RelationshipType *string  `json:"relationshipType,omitempty"`
}
