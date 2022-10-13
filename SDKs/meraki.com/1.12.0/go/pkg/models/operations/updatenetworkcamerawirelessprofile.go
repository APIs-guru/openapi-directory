package operations

type UpdateNetworkCameraWirelessProfilePathParams struct {
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
	WirelessProfileID string `pathParam:"style=simple,explode=false,name=wirelessProfileId"`
}

type UpdateNetworkCameraWirelessProfileRequestBodyIdentity struct {
	Password *string `json:"password"`
	Username *string `json:"username"`
}

type UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum string

const (
	UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumPsk                              UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "psk"
	UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "8021x-radius"
)

type UpdateNetworkCameraWirelessProfileRequestBodySsid struct {
	AuthMode       *UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum `json:"authMode"`
	EncryptionMode *string                                                        `json:"encryptionMode"`
	Name           *string                                                        `json:"name"`
	Psk            *string                                                        `json:"psk"`
}

type UpdateNetworkCameraWirelessProfileRequestBody struct {
	Identity *UpdateNetworkCameraWirelessProfileRequestBodyIdentity `json:"identity"`
	Name     *string                                                `json:"name"`
	Ssid     *UpdateNetworkCameraWirelessProfileRequestBodySsid     `json:"ssid"`
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
