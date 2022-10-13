package shared

type AttachedResource struct {
	AssetType          *string             `json:"assetType"`
	VersionedResources []VersionedResource `json:"versionedResources"`
}
