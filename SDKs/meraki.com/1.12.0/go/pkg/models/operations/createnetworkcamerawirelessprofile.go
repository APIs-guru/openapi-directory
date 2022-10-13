package operations

type CreateNetworkCameraWirelessProfilePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkCameraWirelessProfileRequestBodyIdentity struct {
	Password *string `json:"password"`
	Username *string `json:"username"`
}

type CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum string

const (
	CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumPsk                              CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "psk"
	CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "8021x-radius"
)

type CreateNetworkCameraWirelessProfileRequestBodySsid struct {
	AuthMode       *CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum `json:"authMode"`
	EncryptionMode *string                                                        `json:"encryptionMode"`
	Name           *string                                                        `json:"name"`
	Psk            *string                                                        `json:"psk"`
}

type CreateNetworkCameraWirelessProfileRequestBody struct {
	Identity *CreateNetworkCameraWirelessProfileRequestBodyIdentity `json:"identity"`
	Name     string                                                 `json:"name"`
	Ssid     CreateNetworkCameraWirelessProfileRequestBodySsid      `json:"ssid"`
}

type CreateNetworkCameraWirelessProfileRequest struct {
	PathParams CreateNetworkCameraWirelessProfilePathParams
	Request    CreateNetworkCameraWirelessProfileRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkCameraWirelessProfileResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	CreateNetworkCameraWirelessProfile200ApplicationJSONObject map[string]interface{}
}
