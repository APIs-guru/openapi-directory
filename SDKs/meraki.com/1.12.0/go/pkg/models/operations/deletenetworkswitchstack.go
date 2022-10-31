package operations



type DeleteNetworkSwitchStackPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}

type DeleteNetworkSwitchStackRequest struct {
    PathParams DeleteNetworkSwitchStackPathParams 
    
}

type DeleteNetworkSwitchStackResponse struct {
    ContentType string 
    StatusCode int64 
    
}

