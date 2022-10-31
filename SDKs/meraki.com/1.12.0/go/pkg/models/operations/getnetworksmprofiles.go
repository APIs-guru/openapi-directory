package operations



type GetNetworkSmProfilesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmProfilesRequest struct {
    PathParams GetNetworkSmProfilesPathParams 
    
}

type GetNetworkSmProfilesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmProfiles200ApplicationJSONObject map[string]interface{} 
    
}

