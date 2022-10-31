package operations



type DcimConsoleServerPortTemplatesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsoleServerPortTemplatesDeleteRequest struct {
    PathParams DcimConsoleServerPortTemplatesDeletePathParams 
    
}

type DcimConsoleServerPortTemplatesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

