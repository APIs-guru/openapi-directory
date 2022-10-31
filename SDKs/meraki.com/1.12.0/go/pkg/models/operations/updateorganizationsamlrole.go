package operations

type UpdateOrganizationSamlRolePathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
	SamlRoleID     string `pathParam:"style=simple,explode=false,name=samlRoleId"`
}

type UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum string

const (
	UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumFull            UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "full"
	UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumReadOnly        UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "read-only"
	UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumGuestAmbassador UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "guest-ambassador"
	UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumMonitorOnly     UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = "monitor-only"
)

type UpdateOrganizationSamlRoleRequestBodyNetworks struct {
	Access UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum `json:"access"`
	ID     string                                                  `json:"id"`
}

type UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum string

const (
	UpdateOrganizationSamlRoleRequestBodyOrgAccessEnumNone     UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum = "none"
	UpdateOrganizationSamlRoleRequestBodyOrgAccessEnumReadOnly UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum = "read-only"
	UpdateOrganizationSamlRoleRequestBodyOrgAccessEnumFull     UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum = "full"
)

type UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum string

const (
	UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumFull            UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = "full"
	UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumReadOnly        UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = "read-only"
	UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumGuestAmbassador UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = "guest-ambassador"
	UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumMonitorOnly     UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = "monitor-only"
)

type UpdateOrganizationSamlRoleRequestBodyTags struct {
	Access UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum `json:"access"`
	Tag    string                                              `json:"tag"`
}

type UpdateOrganizationSamlRoleRequestBody struct {
	Networks  []UpdateOrganizationSamlRoleRequestBodyNetworks     `json:"networks,omitempty"`
	OrgAccess *UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum `json:"orgAccess,omitempty"`
	Role      *string                                             `json:"role,omitempty"`
	Tags      []UpdateOrganizationSamlRoleRequestBodyTags         `json:"tags,omitempty"`
}

type UpdateOrganizationSamlRoleRequest struct {
	PathParams UpdateOrganizationSamlRolePathParams
	Request    *UpdateOrganizationSamlRoleRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationSamlRoleResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	UpdateOrganizationSamlRole200ApplicationJSONObject map[string]interface{}
}
