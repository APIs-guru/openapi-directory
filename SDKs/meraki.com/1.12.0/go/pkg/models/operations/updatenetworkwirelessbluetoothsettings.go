package operations

type UpdateNetworkWirelessBluetoothSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum string

const (
	UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumUnique    UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum = "Unique"
	UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumNonUnique UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum = "Non-unique"
)

type UpdateNetworkWirelessBluetoothSettingsRequestBody struct {
	AdvertisingEnabled       *bool                                                                          `json:"advertisingEnabled"`
	Major                    *int64                                                                         `json:"major"`
	MajorMinorAssignmentMode *UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum `json:"majorMinorAssignmentMode"`
	Minor                    *int64                                                                         `json:"minor"`
	ScanningEnabled          *bool                                                                          `json:"scanningEnabled"`
	UUID                     *string                                                                        `json:"uuid"`
}

type UpdateNetworkWirelessBluetoothSettingsRequest struct {
	PathParams UpdateNetworkWirelessBluetoothSettingsPathParams
	Request    *UpdateNetworkWirelessBluetoothSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessBluetoothSettingsResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	UpdateNetworkWirelessBluetoothSettings200ApplicationJSONObject map[string]interface{}
}
