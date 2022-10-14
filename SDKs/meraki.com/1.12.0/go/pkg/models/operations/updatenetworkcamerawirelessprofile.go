package operations

type UpdateNetworkCameraWirelessProfilePathParams struct {
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
	WirelessProfileID string `pathParam:"style=simple,explode=false,name=wirelessProfileId"`
}

type UpdateNetworkCameraWirelessProfileRequestBodyIdentity struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}

type UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum string

const (
	UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumPsk                              UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "psk"
	UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "8021x-radius"
)

type UpdateNetworkCameraWirelessProfileRequestBodySsid struct {
	AuthMode       *UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum `json:"authMode,omitempty"`
	EncryptionMode *string                                                        `json:"encryptionMode,omitempty"`
	Name           *string                                                        `json:"name,omitempty"`
	Psk            *string                                                        `json:"psk,omitempty"`
}

type UpdateNetworkCameraWirelessProfileRequestBody struct {
	Identity *UpdateNetworkCameraWirelessProfileRequestBodyIdentity `json:"identity,omitempty"`
	Name     *string                                                `json:"name,omitempty"`
	Ssid     *UpdateNetworkCameraWirelessProfileRequestBodySsid     `json:"ssid,omitempty"`
}

type UpdateNetworkCameraWirelessProfileRequest struct {
	PathParams UpdateNetworkCameraWirelessProfilePathParams
	Request    *UpdateNetworkCameraWirelessProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkCameraWirelessProfileResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	UpdateNetworkCameraWirelessProfile200ApplicationJSONObject map[string]interface{}
}
