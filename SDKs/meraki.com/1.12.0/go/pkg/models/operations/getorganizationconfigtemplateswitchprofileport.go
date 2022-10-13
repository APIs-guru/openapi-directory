package operations

type GetOrganizationConfigTemplateSwitchProfilePortPathParams struct {
	ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
	OrganizationID   string `pathParam:"style=simple,explode=false,name=organizationId"`
	PortID           string `pathParam:"style=simple,explode=false,name=portId"`
	ProfileID        string `pathParam:"style=simple,explode=false,name=profileId"`
}

type GetOrganizationConfigTemplateSwitchProfilePortRequest struct {
	PathParams GetOrganizationConfigTemplateSwitchProfilePortPathParams
}

type GetOrganizationConfigTemplateSwitchProfilePortResponse struct {
	ContentType                                                            string
	StatusCode                                                             int64
	GetOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject map[string]interface{}
}
