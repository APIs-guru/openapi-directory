package operations

type GetOrganizationConfigTemplateSwitchProfilePortsPathParams struct {
	ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
	OrganizationID   string `pathParam:"style=simple,explode=false,name=organizationId"`
	ProfileID        string `pathParam:"style=simple,explode=false,name=profileId"`
}

type GetOrganizationConfigTemplateSwitchProfilePortsRequest struct {
	PathParams GetOrganizationConfigTemplateSwitchProfilePortsPathParams
}

type GetOrganizationConfigTemplateSwitchProfilePortsResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObject map[string]interface{}
}
