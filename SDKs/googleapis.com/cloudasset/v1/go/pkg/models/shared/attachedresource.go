package shared

// AttachedResource
// Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload.
type AttachedResource struct {
	AssetType          *string             `json:"assetType,omitempty"`
	VersionedResources []VersionedResource `json:"versionedResources,omitempty"`
}
