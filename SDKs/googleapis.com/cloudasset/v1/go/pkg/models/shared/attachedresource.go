package shared



type AttachedResource struct {
    AssetType *string `json:"assetType,omitempty"`
    VersionedResources []VersionedResource `json:"versionedResources,omitempty"`
    
}

