package operations

type GetNetworkWirelessBluetoothSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessBluetoothSettingsRequest struct {
	PathParams GetNetworkWirelessBluetoothSettingsPathParams
}

type GetNetworkWirelessBluetoothSettingsResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetNetworkWirelessBluetoothSettings200ApplicationJSONObject map[string]interface{}
}
