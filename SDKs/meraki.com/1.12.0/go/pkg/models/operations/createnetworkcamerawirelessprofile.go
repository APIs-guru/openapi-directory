package operations

type CreateNetworkCameraWirelessProfilePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// CreateNetworkCameraWirelessProfileRequestBodyIdentity
// The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
type CreateNetworkCameraWirelessProfileRequestBodyIdentity struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}

type CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum string

const (
	CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumPsk                              CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "psk"
	CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = "8021x-radius"
)

// CreateNetworkCameraWirelessProfileRequestBodySsid
// The details of the SSID config.
type CreateNetworkCameraWirelessProfileRequestBodySsid struct {
	AuthMode       *CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum `json:"authMode,omitempty"`
	EncryptionMode *string                                                        `json:"encryptionMode,omitempty"`
	Name           *string                                                        `json:"name,omitempty"`
	Psk            *string                                                        `json:"psk,omitempty"`
}

type CreateNetworkCameraWirelessProfileRequestBody struct {
	Identity *CreateNetworkCameraWirelessProfileRequestBodyIdentity `json:"identity,omitempty"`
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
