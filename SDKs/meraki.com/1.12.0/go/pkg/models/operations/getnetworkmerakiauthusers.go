package operations



type GetNetworkMerakiAuthUsersPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkMerakiAuthUsersRequest struct {
    PathParams GetNetworkMerakiAuthUsersPathParams 
    
}

type GetNetworkMerakiAuthUsersResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkMerakiAuthUsers200ApplicationJSONObject map[string]interface{} 
    
}

