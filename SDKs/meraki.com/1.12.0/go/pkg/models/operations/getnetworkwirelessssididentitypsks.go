package operations



type GetNetworkWirelessSsidIdentityPsksPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type GetNetworkWirelessSsidIdentityPsksRequest struct {
    PathParams GetNetworkWirelessSsidIdentityPsksPathParams 
    
}

type GetNetworkWirelessSsidIdentityPsksResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessSsidIdentityPsks200ApplicationJSONObject map[string]interface{} 
    
}

