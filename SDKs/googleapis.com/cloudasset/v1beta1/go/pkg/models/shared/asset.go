package shared

type Asset struct {
	AccessLevel      *GoogleIdentityAccesscontextmanagerV1AccessLevel      `json:"accessLevel"`
	AccessPolicy     *GoogleIdentityAccesscontextmanagerV1AccessPolicy     `json:"accessPolicy"`
	AssetType        *string                                               `json:"assetType"`
	IamPolicy        *Policy                                               `json:"iamPolicy"`
	Name             *string                                               `json:"name"`
	OrgPolicy        []GoogleCloudOrgpolicyV1Policy                        `json:"orgPolicy"`
	Resource         *Resource                                             `json:"resource"`
	ServicePerimeter *GoogleIdentityAccesscontextmanagerV1ServicePerimeter `json:"servicePerimeter"`
}
