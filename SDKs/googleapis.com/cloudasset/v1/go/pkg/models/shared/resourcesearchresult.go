package shared

type ResourceSearchResult struct {
	AdditionalAttributes   map[string]interface{}      `json:"additionalAttributes"`
	AssetType              *string                     `json:"assetType"`
	AttachedResources      []AttachedResource          `json:"attachedResources"`
	CreateTime             *string                     `json:"createTime"`
	Description            *string                     `json:"description"`
	DisplayName            *string                     `json:"displayName"`
	Folders                []string                    `json:"folders"`
	KmsKey                 *string                     `json:"kmsKey"`
	KmsKeys                []string                    `json:"kmsKeys"`
	Labels                 map[string]string           `json:"labels"`
	Location               *string                     `json:"location"`
	Name                   *string                     `json:"name"`
	NetworkTags            []string                    `json:"networkTags"`
	Organization           *string                     `json:"organization"`
	ParentAssetType        *string                     `json:"parentAssetType"`
	ParentFullResourceName *string                     `json:"parentFullResourceName"`
	Project                *string                     `json:"project"`
	Relationships          map[string]RelatedResources `json:"relationships"`
	State                  *string                     `json:"state"`
	TagKeys                []string                    `json:"tagKeys"`
	TagValueIds            []string                    `json:"tagValueIds"`
	TagValues              []string                    `json:"tagValues"`
	UpdateTime             *string                     `json:"updateTime"`
	VersionedResources     []VersionedResource         `json:"versionedResources"`
}
