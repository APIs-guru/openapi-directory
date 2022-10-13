package operations

type GetOrganizationSamlPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationSamlRequest struct {
	PathParams GetOrganizationSamlPathParams
}

type GetOrganizationSamlResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetOrganizationSaml200ApplicationJSONObject map[string]interface{}
}
