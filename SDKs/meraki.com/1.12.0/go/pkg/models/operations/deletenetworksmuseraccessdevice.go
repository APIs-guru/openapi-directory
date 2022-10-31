package operations



type DeleteNetworkSmUserAccessDevicePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    UserAccessDeviceID string `pathParam:"style=simple,explode=false,name=userAccessDeviceId"`
    
}

type DeleteNetworkSmUserAccessDeviceRequest struct {
    PathParams DeleteNetworkSmUserAccessDevicePathParams 
    
}

type DeleteNetworkSmUserAccessDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

