package operations



type ExtrasGraphsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasGraphsDeleteRequest struct {
    PathParams ExtrasGraphsDeletePathParams 
    
}

type ExtrasGraphsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

