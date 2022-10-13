package operations

type GetOrganizationOpenapiSpecPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationOpenapiSpecRequest struct {
	PathParams GetOrganizationOpenapiSpecPathParams
}

type GetOrganizationOpenapiSpecResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetOrganizationOpenapiSpec200ApplicationJSONObject map[string]interface{}
}
