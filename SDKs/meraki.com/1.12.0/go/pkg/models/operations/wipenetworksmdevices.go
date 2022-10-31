package operations



type WipeNetworkSmDevicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type WipeNetworkSmDevicesRequestBody struct {
    ID *string `json:"id,omitempty"`
    Pin *int64 `json:"pin,omitempty"`
    Serial *string `json:"serial,omitempty"`
    WifiMac *string `json:"wifiMac,omitempty"`
    
}

type WipeNetworkSmDevicesRequest struct {
    PathParams WipeNetworkSmDevicesPathParams 
    Request *WipeNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
    
}

type WipeNetworkSmDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    WipeNetworkSmDevices200ApplicationJSONObject map[string]interface{} 
    
}

