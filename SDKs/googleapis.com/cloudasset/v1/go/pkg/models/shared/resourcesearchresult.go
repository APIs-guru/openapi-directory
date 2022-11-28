package shared

// ResourceSearchResult
// A result of Resource Search, containing information of a cloud resource. Next ID: 31
type ResourceSearchResult struct {
	AdditionalAttributes   map[string]interface{}      `json:"additionalAttributes,omitempty"`
	AssetType              *string                     `json:"assetType,omitempty"`
	AttachedResources      []AttachedResource          `json:"attachedResources,omitempty"`
	CreateTime             *string                     `json:"createTime,omitempty"`
	Description            *string                     `json:"description,omitempty"`
	DisplayName            *string                     `json:"displayName,omitempty"`
	Folders                []string                    `json:"folders,omitempty"`
	KmsKey                 *string                     `json:"kmsKey,omitempty"`
	KmsKeys                []string                    `json:"kmsKeys,omitempty"`
	Labels                 map[string]string           `json:"labels,omitempty"`
	Location               *string                     `json:"location,omitempty"`
	Name                   *string                     `json:"name,omitempty"`
	NetworkTags            []string                    `json:"networkTags,omitempty"`
	Organization           *string                     `json:"organization,omitempty"`
	ParentAssetType        *string                     `json:"parentAssetType,omitempty"`
	ParentFullResourceName *string                     `json:"parentFullResourceName,omitempty"`
	Project                *string                     `json:"project,omitempty"`
	Relationships          map[string]RelatedResources `json:"relationships,omitempty"`
	State                  *string                     `json:"state,omitempty"`
	TagKeys                []string                    `json:"tagKeys,omitempty"`
	TagValueIds            []string                    `json:"tagValueIds,omitempty"`
	TagValues              []string                    `json:"tagValues,omitempty"`
	UpdateTime             *string                     `json:"updateTime,omitempty"`
	VersionedResources     []VersionedResource         `json:"versionedResources,omitempty"`
}
