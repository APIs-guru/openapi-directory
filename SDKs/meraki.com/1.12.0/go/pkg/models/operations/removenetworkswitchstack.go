package operations



type RemoveNetworkSwitchStackPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}

type RemoveNetworkSwitchStackRequestBody struct {
    Serial string `json:"serial"`
    
}

type RemoveNetworkSwitchStackRequest struct {
    PathParams RemoveNetworkSwitchStackPathParams 
    Request RemoveNetworkSwitchStackRequestBody `request:"mediaType=application/json"`
    
}

type RemoveNetworkSwitchStackResponse struct {
    ContentType string 
    StatusCode int64 
    RemoveNetworkSwitchStack200ApplicationJSONObject map[string]interface{} 
    
}

