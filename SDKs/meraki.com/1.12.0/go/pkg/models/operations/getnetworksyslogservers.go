package operations



type GetNetworkSyslogServersPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSyslogServersRequest struct {
    PathParams GetNetworkSyslogServersPathParams 
    
}

type GetNetworkSyslogServersResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSyslogServers200ApplicationJSONObject map[string]interface{} 
    
}

