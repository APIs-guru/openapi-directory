package operations



type UpdateNetworkSyslogServersPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkSyslogServersRequestBodyServers struct {
    Host string `json:"host"`
    Port int64 `json:"port"`
    Roles []string `json:"roles"`
    
}

type UpdateNetworkSyslogServersRequestBody struct {
    Servers []UpdateNetworkSyslogServersRequestBodyServers `json:"servers"`
    
}

type UpdateNetworkSyslogServersRequest struct {
    PathParams UpdateNetworkSyslogServersPathParams 
    Request UpdateNetworkSyslogServersRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSyslogServersResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSyslogServers200ApplicationJSONObject map[string]interface{} 
    
}

