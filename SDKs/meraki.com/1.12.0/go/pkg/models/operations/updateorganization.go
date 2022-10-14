package operations

type UpdateOrganizationPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationRequestBodyAPI struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type UpdateOrganizationRequestBody struct {
	API  *UpdateOrganizationRequestBodyAPI `json:"api,omitempty"`
	Name *string                           `json:"name,omitempty"`
}

type UpdateOrganizationRequest struct {
	PathParams UpdateOrganizationPathParams
	Request    *UpdateOrganizationRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	UpdateOrganization200ApplicationJSONObject map[string]interface{}
}
