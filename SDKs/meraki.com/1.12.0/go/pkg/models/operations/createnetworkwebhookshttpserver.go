package operations



type CreateNetworkWebhooksHTTPServerPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkWebhooksHTTPServerRequestBody struct {
    Name string `json:"name"`
    SharedSecret *string `json:"sharedSecret,omitempty"`
    URL string `json:"url"`
    
}

type CreateNetworkWebhooksHTTPServerRequest struct {
    PathParams CreateNetworkWebhooksHTTPServerPathParams 
    Request CreateNetworkWebhooksHTTPServerRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkWebhooksHTTPServerResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkWebhooksHTTPServer201ApplicationJSONObject map[string]interface{} 
    
}

