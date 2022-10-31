package operations



type ModifyNetworkSmDevicesTagsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type ModifyNetworkSmDevicesTagsRequestBody struct {
    Ids []string `json:"ids,omitempty"`
    Scope []string `json:"scope,omitempty"`
    Serials []string `json:"serials,omitempty"`
    Tags []string `json:"tags"`
    UpdateAction string `json:"updateAction"`
    WifiMacs []string `json:"wifiMacs,omitempty"`
    
}

type ModifyNetworkSmDevicesTagsRequest struct {
    PathParams ModifyNetworkSmDevicesTagsPathParams 
    Request ModifyNetworkSmDevicesTagsRequestBody `request:"mediaType=application/json"`
    
}

type ModifyNetworkSmDevicesTagsResponse struct {
    ContentType string 
    StatusCode int64 
    ModifyNetworkSmDevicesTags200ApplicationJSONObject map[string]interface{} 
    
}

