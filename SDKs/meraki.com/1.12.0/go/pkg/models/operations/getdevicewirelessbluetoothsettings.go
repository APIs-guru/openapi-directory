package operations



type GetDeviceWirelessBluetoothSettingsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceWirelessBluetoothSettingsRequest struct {
    PathParams GetDeviceWirelessBluetoothSettingsPathParams 
    
}

type GetDeviceWirelessBluetoothSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceWirelessBluetoothSettings200ApplicationJSONObject map[string]interface{} 
    
}

