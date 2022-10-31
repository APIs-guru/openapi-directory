package operations



type DcimConsoleServerPortsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsoleServerPortsDeleteRequest struct {
    PathParams DcimConsoleServerPortsDeletePathParams 
    
}

type DcimConsoleServerPortsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

