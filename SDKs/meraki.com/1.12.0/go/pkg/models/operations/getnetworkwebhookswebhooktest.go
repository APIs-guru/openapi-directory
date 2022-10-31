package operations



type GetNetworkWebhooksWebhookTestPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    WebhookTestID string `pathParam:"style=simple,explode=false,name=webhookTestId"`
    
}

type GetNetworkWebhooksWebhookTestRequest struct {
    PathParams GetNetworkWebhooksWebhookTestPathParams 
    
}

type GetNetworkWebhooksWebhookTestResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWebhooksWebhookTest200ApplicationJSONObject map[string]interface{} 
    
}

