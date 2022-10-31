package operations



type ExtrasReportsRunPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasReportsRunRequest struct {
    PathParams ExtrasReportsRunPathParams 
    
}

type ExtrasReportsRunResponse struct {
    ContentType string 
    StatusCode int64 
    
}

