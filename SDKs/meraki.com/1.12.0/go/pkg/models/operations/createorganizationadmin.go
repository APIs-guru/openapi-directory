package operations

type CreateOrganizationAdminPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationAdminRequestBodyAuthenticationMethodEnum string

const (
	CreateOrganizationAdminRequestBodyAuthenticationMethodEnumEmail              CreateOrganizationAdminRequestBodyAuthenticationMethodEnum = "Email"
	CreateOrganizationAdminRequestBodyAuthenticationMethodEnumCiscoSecureXSignOn CreateOrganizationAdminRequestBodyAuthenticationMethodEnum = "Cisco SecureX Sign-On"
)

type CreateOrganizationAdminRequestBodyNetworksAccessEnum string

const (
	CreateOrganizationAdminRequestBodyNetworksAccessEnumFull            CreateOrganizationAdminRequestBodyNetworksAccessEnum = "full"
	CreateOrganizationAdminRequestBodyNetworksAccessEnumReadOnly        CreateOrganizationAdminRequestBodyNetworksAccessEnum = "read-only"
	CreateOrganizationAdminRequestBodyNetworksAccessEnumGuestAmbassador CreateOrganizationAdminRequestBodyNetworksAccessEnum = "guest-ambassador"
	CreateOrganizationAdminRequestBodyNetworksAccessEnumMonitorOnly     CreateOrganizationAdminRequestBodyNetworksAccessEnum = "monitor-only"
)

type CreateOrganizationAdminRequestBodyNetworks struct {
	Access CreateOrganizationAdminRequestBodyNetworksAccessEnum `json:"access"`
	ID     string                                               `json:"id"`
}

type CreateOrganizationAdminRequestBodyOrgAccessEnum string

const (
	CreateOrganizationAdminRequestBodyOrgAccessEnumFull       CreateOrganizationAdminRequestBodyOrgAccessEnum = "full"
	CreateOrganizationAdminRequestBodyOrgAccessEnumReadOnly   CreateOrganizationAdminRequestBodyOrgAccessEnum = "read-only"
	CreateOrganizationAdminRequestBodyOrgAccessEnumEnterprise CreateOrganizationAdminRequestBodyOrgAccessEnum = "enterprise"
	CreateOrganizationAdminRequestBodyOrgAccessEnumNone       CreateOrganizationAdminRequestBodyOrgAccessEnum = "none"
)

type CreateOrganizationAdminRequestBodyTagsAccessEnum string

const (
	CreateOrganizationAdminRequestBodyTagsAccessEnumFull            CreateOrganizationAdminRequestBodyTagsAccessEnum = "full"
	CreateOrganizationAdminRequestBodyTagsAccessEnumReadOnly        CreateOrganizationAdminRequestBodyTagsAccessEnum = "read-only"
	CreateOrganizationAdminRequestBodyTagsAccessEnumGuestAmbassador CreateOrganizationAdminRequestBodyTagsAccessEnum = "guest-ambassador"
	CreateOrganizationAdminRequestBodyTagsAccessEnumMonitorOnly     CreateOrganizationAdminRequestBodyTagsAccessEnum = "monitor-only"
)

type CreateOrganizationAdminRequestBodyTags struct {
	Access CreateOrganizationAdminRequestBodyTagsAccessEnum `json:"access"`
	Tag    string                                           `json:"tag"`
}

type CreateOrganizationAdminRequestBody struct {
	AuthenticationMethod *CreateOrganizationAdminRequestBodyAuthenticationMethodEnum `json:"authenticationMethod"`
	Email                string                                                      `json:"email"`
	Name                 string                                                      `json:"name"`
	Networks             []CreateOrganizationAdminRequestBodyNetworks                `json:"networks"`
	OrgAccess            CreateOrganizationAdminRequestBodyOrgAccessEnum             `json:"orgAccess"`
	Tags                 []CreateOrganizationAdminRequestBodyTags                    `json:"tags"`
}

type CreateOrganizationAdminRequest struct {
	PathParams CreateOrganizationAdminPathParams
	Request    CreateOrganizationAdminRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationAdminResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateOrganizationAdmin201ApplicationJSONObject map[string]interface{}
}
