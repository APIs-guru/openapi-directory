package operations



type RefreshNetworkSmDeviceDetailsPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type RefreshNetworkSmDeviceDetailsRequest struct {
    PathParams RefreshNetworkSmDeviceDetailsPathParams 
    
}

type RefreshNetworkSmDeviceDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

