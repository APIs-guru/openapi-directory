package operations



type DcimConsolePortTemplatesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsolePortTemplatesDeleteRequest struct {
    PathParams DcimConsolePortTemplatesDeletePathParams 
    
}

type DcimConsolePortTemplatesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

