package operations

type UpdateNetworkSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSettingsRequestBodySecureConnect struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type UpdateNetworkSettingsRequestBody struct {
	LocalStatusPageEnabled  *bool                                          `json:"localStatusPageEnabled,omitempty"`
	RemoteStatusPageEnabled *bool                                          `json:"remoteStatusPageEnabled,omitempty"`
	SecureConnect           *UpdateNetworkSettingsRequestBodySecureConnect `json:"secureConnect,omitempty"`
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
