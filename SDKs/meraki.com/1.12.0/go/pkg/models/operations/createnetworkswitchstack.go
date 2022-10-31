package operations



type CreateNetworkSwitchStackPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkSwitchStackRequestBody struct {
    Name string `json:"name"`
    Serials []string `json:"serials"`
    
}

type CreateNetworkSwitchStackRequest struct {
    PathParams CreateNetworkSwitchStackPathParams 
    Request CreateNetworkSwitchStackRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkSwitchStackResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkSwitchStack201ApplicationJSONObject map[string]interface{} 
    
}

