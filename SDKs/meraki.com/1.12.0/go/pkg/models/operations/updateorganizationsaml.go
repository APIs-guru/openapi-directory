package operations

type UpdateOrganizationSamlPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationSamlRequestBody struct {
	Enabled *bool `json:"enabled"`
}

type UpdateOrganizationSamlRequest struct {
	PathParams UpdateOrganizationSamlPathParams
	Request    *UpdateOrganizationSamlRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationSamlResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateOrganizationSaml200ApplicationJSONObject map[string]interface{}
}
