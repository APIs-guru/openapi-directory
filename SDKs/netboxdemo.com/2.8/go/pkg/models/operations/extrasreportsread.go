package operations



type ExtrasReportsReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasReportsReadRequest struct {
    PathParams ExtrasReportsReadPathParams 
    
}

type ExtrasReportsReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

