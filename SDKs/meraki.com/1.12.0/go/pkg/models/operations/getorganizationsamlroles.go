package operations

type GetOrganizationSamlRolesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationSamlRolesRequest struct {
	PathParams GetOrganizationSamlRolesPathParams
}

type GetOrganizationSamlRolesResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetOrganizationSamlRoles200ApplicationJSONObject map[string]interface{}
}
