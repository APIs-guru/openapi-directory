package operations



type MoveNetworkSmDevicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type MoveNetworkSmDevicesRequestBody struct {
    Ids []string `json:"ids,omitempty"`
    NewNetwork string `json:"newNetwork"`
    Scope []string `json:"scope,omitempty"`
    Serials []string `json:"serials,omitempty"`
    WifiMacs []string `json:"wifiMacs,omitempty"`
    
}

type MoveNetworkSmDevicesRequest struct {
    PathParams MoveNetworkSmDevicesPathParams 
    Request MoveNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
    
}

type MoveNetworkSmDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    MoveNetworkSmDevices200ApplicationJSONObject map[string]interface{} 
    
}

