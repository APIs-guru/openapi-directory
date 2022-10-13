package operations

type UpdateNetworkSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSettingsRequestBodySecureConnect struct {
	Enabled *bool `json:"enabled"`
}

type UpdateNetworkSettingsRequestBody struct {
	LocalStatusPageEnabled  *bool                                          `json:"localStatusPageEnabled"`
	RemoteStatusPageEnabled *bool                                          `json:"remoteStatusPageEnabled"`
	SecureConnect           *UpdateNetworkSettingsRequestBodySecureConnect `json:"secureConnect"`
}

type UpdateNetworkSettingsRequest struct {
	PathParams UpdateNetworkSettingsPathParams
	Request    *UpdateNetworkSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSettingsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	UpdateNetworkSettings200ApplicationJSONObject map[string]interface{}
}
