package operations



type LockNetworkSmDevicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type LockNetworkSmDevicesRequestBody struct {
    Ids []string `json:"ids,omitempty"`
    Pin *int64 `json:"pin,omitempty"`
    Scope []string `json:"scope,omitempty"`
    Serials []string `json:"serials,omitempty"`
    WifiMacs []string `json:"wifiMacs,omitempty"`
    
}

type LockNetworkSmDevicesRequest struct {
    PathParams LockNetworkSmDevicesPathParams 
    Request *LockNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
    
}

type LockNetworkSmDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    LockNetworkSmDevices200ApplicationJSONObject map[string]interface{} 
    
}

