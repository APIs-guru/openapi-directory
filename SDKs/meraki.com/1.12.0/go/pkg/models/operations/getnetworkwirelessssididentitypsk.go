package operations



type GetNetworkWirelessSsidIdentityPskPathParams struct {
    IdentityPskID string `pathParam:"style=simple,explode=false,name=identityPskId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type GetNetworkWirelessSsidIdentityPskRequest struct {
    PathParams GetNetworkWirelessSsidIdentityPskPathParams 
    
}

type GetNetworkWirelessSsidIdentityPskResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessSsidIdentityPsk200ApplicationJSONObject map[string]interface{} 
    
}

