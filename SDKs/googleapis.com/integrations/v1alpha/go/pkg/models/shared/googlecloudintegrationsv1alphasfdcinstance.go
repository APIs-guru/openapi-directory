package shared

type GoogleCloudIntegrationsV1alphaSfdcInstance struct {
	AuthConfigID     []string `json:"authConfigId"`
	CreateTime       *string  `json:"createTime"`
	DeleteTime       *string  `json:"deleteTime"`
	Description      *string  `json:"description"`
	DisplayName      *string  `json:"displayName"`
	Name             *string  `json:"name"`
	ServiceAuthority *string  `json:"serviceAuthority"`
	SfdcOrgID        *string  `json:"sfdcOrgId"`
	UpdateTime       *string  `json:"updateTime"`
}
