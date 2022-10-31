package operations



type GetNetworkWebhooksHTTPServerPathParams struct {
    HTTPServerID string `pathParam:"style=simple,explode=false,name=httpServerId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkWebhooksHTTPServerRequest struct {
    PathParams GetNetworkWebhooksHTTPServerPathParams 
    
}

type GetNetworkWebhooksHTTPServerResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWebhooksHTTPServer200ApplicationJSONObject map[string]interface{} 
    
}

