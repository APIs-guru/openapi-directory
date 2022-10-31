package operations



type RemoveNetworkDevicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type RemoveNetworkDevicesRequestBody struct {
    Serial string `json:"serial"`
    
}

type RemoveNetworkDevicesRequest struct {
    PathParams RemoveNetworkDevicesPathParams 
    Request RemoveNetworkDevicesRequestBody `request:"mediaType=application/json"`
    
}

type RemoveNetworkDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

