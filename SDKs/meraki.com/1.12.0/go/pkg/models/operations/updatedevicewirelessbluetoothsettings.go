package operations



type UpdateDeviceWirelessBluetoothSettingsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type UpdateDeviceWirelessBluetoothSettingsRequestBody struct {
    Major *int64 `json:"major,omitempty"`
    Minor *int64 `json:"minor,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

type UpdateDeviceWirelessBluetoothSettingsRequest struct {
    PathParams UpdateDeviceWirelessBluetoothSettingsPathParams 
    Request *UpdateDeviceWirelessBluetoothSettingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceWirelessBluetoothSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDeviceWirelessBluetoothSettings200ApplicationJSONObject map[string]interface{} 
    
}

