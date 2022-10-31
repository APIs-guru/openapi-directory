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
	AdvertisingEnabled       *bool                                                                          `json:"advertisingEnabled,omitempty"`
	Major                    *int64                                                                         `json:"major,omitempty"`
	MajorMinorAssignmentMode *UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum `json:"majorMinorAssignmentMode,omitempty"`
	Minor                    *int64                                                                         `json:"minor,omitempty"`
	ScanningEnabled          *bool                                                                          `json:"scanningEnabled,omitempty"`
	UUID                     *string                                                                        `json:"uuid,omitempty"`
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
