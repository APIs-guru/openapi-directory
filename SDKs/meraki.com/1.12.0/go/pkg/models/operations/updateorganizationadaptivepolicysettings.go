package operations

type UpdateOrganizationAdaptivePolicySettingsPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationAdaptivePolicySettingsRequestBody struct {
	EnabledNetworks []string `json:"enabledNetworks,omitempty"`
}

type UpdateOrganizationAdaptivePolicySettingsRequest struct {
	PathParams UpdateOrganizationAdaptivePolicySettingsPathParams
	Request    *UpdateOrganizationAdaptivePolicySettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationAdaptivePolicySettingsResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	UpdateOrganizationAdaptivePolicySettings200ApplicationJSONObject map[string]interface{}
}
