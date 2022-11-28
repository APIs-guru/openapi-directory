package shared

// GoogleCloudIntegrationsV1alphaSfdcInstanceInput
// The SfdcInstance resource use to hold channels and connection config data.
type GoogleCloudIntegrationsV1alphaSfdcInstanceInput struct {
	AuthConfigID     []string `json:"authConfigId,omitempty"`
	Description      *string  `json:"description,omitempty"`
	DisplayName      *string  `json:"displayName,omitempty"`
	Name             *string  `json:"name,omitempty"`
	ServiceAuthority *string  `json:"serviceAuthority,omitempty"`
	SfdcOrgID        *string  `json:"sfdcOrgId,omitempty"`
}

// GoogleCloudIntegrationsV1alphaSfdcInstance
// The SfdcInstance resource use to hold channels and connection config data.
type GoogleCloudIntegrationsV1alphaSfdcInstance struct {
	AuthConfigID     []string `json:"authConfigId,omitempty"`
	CreateTime       *string  `json:"createTime,omitempty"`
	DeleteTime       *string  `json:"deleteTime,omitempty"`
	Description      *string  `json:"description,omitempty"`
	DisplayName      *string  `json:"displayName,omitempty"`
	Name             *string  `json:"name,omitempty"`
	ServiceAuthority *string  `json:"serviceAuthority,omitempty"`
	SfdcOrgID        *string  `json:"sfdcOrgId,omitempty"`
	UpdateTime       *string  `json:"updateTime,omitempty"`
}
