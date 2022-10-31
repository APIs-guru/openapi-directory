package shared

type Asset struct {
	AccessLevel      *GoogleIdentityAccesscontextmanagerV1AccessLevel      `json:"accessLevel,omitempty"`
	AccessPolicy     *GoogleIdentityAccesscontextmanagerV1AccessPolicy     `json:"accessPolicy,omitempty"`
	Ancestors        []string                                              `json:"ancestors,omitempty"`
	AssetType        *string                                               `json:"assetType,omitempty"`
	IamPolicy        *Policy                                               `json:"iamPolicy,omitempty"`
	Name             *string                                               `json:"name,omitempty"`
	OrgPolicy        []GoogleCloudOrgpolicyV1Policy                        `json:"orgPolicy,omitempty"`
	OsInventory      *Inventory                                            `json:"osInventory,omitempty"`
	RelatedAsset     *RelatedAsset                                         `json:"relatedAsset,omitempty"`
	RelatedAssets    *RelatedAssets                                        `json:"relatedAssets,omitempty"`
	Resource         *Resource                                             `json:"resource,omitempty"`
	ServicePerimeter *GoogleIdentityAccesscontextmanagerV1ServicePerimeter `json:"servicePerimeter,omitempty"`
	UpdateTime       *string                                               `json:"updateTime,omitempty"`
}
