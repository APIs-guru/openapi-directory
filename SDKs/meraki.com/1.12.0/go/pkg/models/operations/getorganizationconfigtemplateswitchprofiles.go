package operations

type GetOrganizationConfigTemplateSwitchProfilesPathParams struct {
	ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
	OrganizationID   string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationConfigTemplateSwitchProfilesRequest struct {
	PathParams GetOrganizationConfigTemplateSwitchProfilesPathParams
}

type GetOrganizationConfigTemplateSwitchProfilesResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject map[string]interface{}
}
