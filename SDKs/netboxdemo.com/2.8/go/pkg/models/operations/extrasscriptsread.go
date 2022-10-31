package operations



type ExtrasScriptsReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasScriptsReadRequest struct {
    PathParams ExtrasScriptsReadPathParams 
    
}

type ExtrasScriptsReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

