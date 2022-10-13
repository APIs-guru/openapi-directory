package operations

type GetOrganizationLoginSecurityPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationLoginSecurityRequest struct {
	PathParams GetOrganizationLoginSecurityPathParams
}

type GetOrganizationLoginSecurityResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetOrganizationLoginSecurity200ApplicationJSONObject map[string]interface{}
}
