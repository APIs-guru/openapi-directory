package operations

type UpdateOrganizationAdminPathParams struct {
	AdminID        string `pathParam:"style=simple,explode=false,name=adminId"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationAdminRequestBodyNetworksAccessEnum string

const (
	UpdateOrganizationAdminRequestBodyNetworksAccessEnumFull            UpdateOrganizationAdminRequestBodyNetworksAccessEnum = "full"
	UpdateOrganizationAdminRequestBodyNetworksAccessEnumReadOnly        UpdateOrganizationAdminRequestBodyNetworksAccessEnum = "read-only"
	UpdateOrganizationAdminRequestBodyNetworksAccessEnumGuestAmbassador UpdateOrganizationAdminRequestBodyNetworksAccessEnum = "guest-ambassador"
	UpdateOrganizationAdminRequestBodyNetworksAccessEnumMonitorOnly     UpdateOrganizationAdminRequestBodyNetworksAccessEnum = "monitor-only"
)

type UpdateOrganizationAdminRequestBodyNetworks struct {
	Access UpdateOrganizationAdminRequestBodyNetworksAccessEnum `json:"access"`
	ID     string                                               `json:"id"`
}

type UpdateOrganizationAdminRequestBodyOrgAccessEnum string

const (
	UpdateOrganizationAdminRequestBodyOrgAccessEnumFull       UpdateOrganizationAdminRequestBodyOrgAccessEnum = "full"
	UpdateOrganizationAdminRequestBodyOrgAccessEnumReadOnly   UpdateOrganizationAdminRequestBodyOrgAccessEnum = "read-only"
	UpdateOrganizationAdminRequestBodyOrgAccessEnumEnterprise UpdateOrganizationAdminRequestBodyOrgAccessEnum = "enterprise"
	UpdateOrganizationAdminRequestBodyOrgAccessEnumNone       UpdateOrganizationAdminRequestBodyOrgAccessEnum = "none"
)

type UpdateOrganizationAdminRequestBodyTagsAccessEnum string

const (
	UpdateOrganizationAdminRequestBodyTagsAccessEnumFull            UpdateOrganizationAdminRequestBodyTagsAccessEnum = "full"
	UpdateOrganizationAdminRequestBodyTagsAccessEnumReadOnly        UpdateOrganizationAdminRequestBodyTagsAccessEnum = "read-only"
	UpdateOrganizationAdminRequestBodyTagsAccessEnumGuestAmbassador UpdateOrganizationAdminRequestBodyTagsAccessEnum = "guest-ambassador"
	UpdateOrganizationAdminRequestBodyTagsAccessEnumMonitorOnly     UpdateOrganizationAdminRequestBodyTagsAccessEnum = "monitor-only"
)

type UpdateOrganizationAdminRequestBodyTags struct {
	Access UpdateOrganizationAdminRequestBodyTagsAccessEnum `json:"access"`
	Tag    string                                           `json:"tag"`
}

type UpdateOrganizationAdminRequestBody struct {
	Name      *string                                          `json:"name"`
	Networks  []UpdateOrganizationAdminRequestBodyNetworks     `json:"networks"`
	OrgAccess *UpdateOrganizationAdminRequestBodyOrgAccessEnum `json:"orgAccess"`
	Tags      []UpdateOrganizationAdminRequestBodyTags         `json:"tags"`
}

type UpdateOrganizationAdminRequest struct {
	PathParams UpdateOrganizationAdminPathParams
	Request    *UpdateOrganizationAdminRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationAdminResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	UpdateOrganizationAdmin200ApplicationJSONObject map[string]interface{}
}
