package operations



type ExtrasTagsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasTagsDeleteRequest struct {
    PathParams ExtrasTagsDeletePathParams 
    
}

type ExtrasTagsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

