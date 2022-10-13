package shared

type Asset struct {
	AccessLevel      *GoogleIdentityAccesscontextmanagerV1AccessLevel      `json:"accessLevel"`
	AccessPolicy     *GoogleIdentityAccesscontextmanagerV1AccessPolicy     `json:"accessPolicy"`
	Ancestors        []string                                              `json:"ancestors"`
	AssetType        *string                                               `json:"assetType"`
	IamPolicy        *Policy                                               `json:"iamPolicy"`
	Name             *string                                               `json:"name"`
	OrgPolicy        []GoogleCloudOrgpolicyV1Policy                        `json:"orgPolicy"`
	OsInventory      *Inventory                                            `json:"osInventory"`
	RelatedAsset     *RelatedAsset                                         `json:"relatedAsset"`
	RelatedAssets    *RelatedAssets                                        `json:"relatedAssets"`
	Resource         *Resource                                             `json:"resource"`
	ServicePerimeter *GoogleIdentityAccesscontextmanagerV1ServicePerimeter `json:"servicePerimeter"`
	UpdateTime       *string                                               `json:"updateTime"`
}
