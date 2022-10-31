package operations



type UpdateNetworkWebhooksHTTPServerPathParams struct {
    HTTPServerID string `pathParam:"style=simple,explode=false,name=httpServerId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkWebhooksHTTPServerRequestBody struct {
    Name *string `json:"name,omitempty"`
    SharedSecret *string `json:"sharedSecret,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type UpdateNetworkWebhooksHTTPServerRequest struct {
    PathParams UpdateNetworkWebhooksHTTPServerPathParams 
    Request *UpdateNetworkWebhooksHTTPServerRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWebhooksHTTPServerResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWebhooksHTTPServer200ApplicationJSONObject map[string]interface{} 
    
}

