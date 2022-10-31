package operations



type GetNetworkSmUserDeviceProfilesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetNetworkSmUserDeviceProfilesRequest struct {
    PathParams GetNetworkSmUserDeviceProfilesPathParams 
    
}

type GetNetworkSmUserDeviceProfilesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmUserDeviceProfiles200ApplicationJSONObject map[string]interface{} 
    
}

