package operations

type CreateOrganizationSamlRolePathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum string

const (
	CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumFull            CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "full"
	CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumReadOnly        CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "read-only"
	CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumGuestAmbassador CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "guest-ambassador"
	CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumMonitorOnly     CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "monitor-only"
)

type CreateOrganizationSamlRoleRequestBodyNetworks struct {
	Access CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum `json:"access"`
	ID     string                                                  `json:"id"`
}

type CreateOrganizationSamlRoleRequestBodyOrgAccessEnum string

const (
	CreateOrganizationSamlRoleRequestBodyOrgAccessEnumNone     CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = "none"
	CreateOrganizationSamlRoleRequestBodyOrgAccessEnumReadOnly CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = "read-only"
	CreateOrganizationSamlRoleRequestBodyOrgAccessEnumFull     CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = "full"
)

type CreateOrganizationSamlRoleRequestBodyTagsAccessEnum string

const (
	CreateOrganizationSamlRoleRequestBodyTagsAccessEnumFull            CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = "full"
	CreateOrganizationSamlRoleRequestBodyTagsAccessEnumReadOnly        CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = "read-only"
	CreateOrganizationSamlRoleRequestBodyTagsAccessEnumGuestAmbassador CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = "guest-ambassador"
	CreateOrganizationSamlRoleRequestBodyTagsAccessEnumMonitorOnly     CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = "monitor-only"
)

type CreateOrganizationSamlRoleRequestBodyTags struct {
	Access CreateOrganizationSamlRoleRequestBodyTagsAccessEnum `json:"access"`
	Tag    string                                              `json:"tag"`
}

type CreateOrganizationSamlRoleRequestBody struct {
	Networks  []CreateOrganizationSamlRoleRequestBodyNetworks    `json:"networks,omitempty"`
	OrgAccess CreateOrganizationSamlRoleRequestBodyOrgAccessEnum `json:"orgAccess"`
	Role      string                                             `json:"role"`
	Tags      []CreateOrganizationSamlRoleRequestBodyTags        `json:"tags,omitempty"`
}

type CreateOrganizationSamlRoleRequest struct {
	PathParams CreateOrganizationSamlRolePathParams
	Request    CreateOrganizationSamlRoleRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationSamlRoleResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	CreateOrganizationSamlRole201ApplicationJSONObject map[string]interface{}
}
