package operations



type DcimPowerPortsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerPortsDeleteRequest struct {
    PathParams DcimPowerPortsDeletePathParams 
    
}

type DcimPowerPortsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

