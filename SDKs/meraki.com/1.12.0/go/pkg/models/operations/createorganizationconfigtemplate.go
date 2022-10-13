package operations

type CreateOrganizationConfigTemplatePathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationConfigTemplateRequestBody struct {
	CopyFromNetworkID *string `json:"copyFromNetworkId"`
	Name              string  `json:"name"`
	TimeZone          *string `json:"timeZone"`
}

type CreateOrganizationConfigTemplateRequest struct {
	PathParams CreateOrganizationConfigTemplatePathParams
	Request    CreateOrganizationConfigTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationConfigTemplateResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	CreateOrganizationConfigTemplate201ApplicationJSONObject map[string]interface{}
}
