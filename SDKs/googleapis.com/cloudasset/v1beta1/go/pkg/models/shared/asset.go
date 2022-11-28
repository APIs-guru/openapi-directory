package shared

// Asset
// An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
type Asset struct {
	AccessLevel      *GoogleIdentityAccesscontextmanagerV1AccessLevel      `json:"accessLevel,omitempty"`
	AccessPolicy     *GoogleIdentityAccesscontextmanagerV1AccessPolicy     `json:"accessPolicy,omitempty"`
	AssetType        *string                                               `json:"assetType,omitempty"`
	IamPolicy        *Policy                                               `json:"iamPolicy,omitempty"`
	Name             *string                                               `json:"name,omitempty"`
	OrgPolicy        []GoogleCloudOrgpolicyV1Policy                        `json:"orgPolicy,omitempty"`
	Resource         *Resource                                             `json:"resource,omitempty"`
	ServicePerimeter *GoogleIdentityAccesscontextmanagerV1ServicePerimeter `json:"servicePerimeter,omitempty"`
}
