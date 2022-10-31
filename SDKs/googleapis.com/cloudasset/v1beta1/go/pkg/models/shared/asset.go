package shared



type Asset struct {
    AccessLevel *GoogleIdentityAccesscontextmanagerV1AccessLevel `json:"accessLevel,omitempty"`
    AccessPolicy *GoogleIdentityAccesscontextmanagerV1AccessPolicy `json:"accessPolicy,omitempty"`
    AssetType *string `json:"assetType,omitempty"`
    IamPolicy *Policy `json:"iamPolicy,omitempty"`
    Name *string `json:"name,omitempty"`
    OrgPolicy []GoogleCloudOrgpolicyV1Policy `json:"orgPolicy,omitempty"`
    Resource *Resource `json:"resource,omitempty"`
    ServicePerimeter *GoogleIdentityAccesscontextmanagerV1ServicePerimeter `json:"servicePerimeter,omitempty"`
    
}

