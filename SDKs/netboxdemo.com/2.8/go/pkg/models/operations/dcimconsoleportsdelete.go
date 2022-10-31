package operations



type DcimConsolePortsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsolePortsDeleteRequest struct {
    PathParams DcimConsolePortsDeletePathParams 
    
}

type DcimConsolePortsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

