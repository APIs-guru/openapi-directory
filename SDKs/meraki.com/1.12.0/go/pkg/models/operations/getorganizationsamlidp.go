package operations

type GetOrganizationSamlIdpPathParams struct {
	IdpID          string `pathParam:"style=simple,explode=false,name=idpId"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationSamlIdpRequest struct {
	PathParams GetOrganizationSamlIdpPathParams
}

type GetOrganizationSamlIdpResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetOrganizationSamlIdp200ApplicationJSONObject map[string]interface{}
}
