package operations



type GetRelationByEnsgidPathParams struct {
    Target string `pathParam:"style=simple,explode=false,name=target"`
    
}

type GetRelationByEnsgidRequest struct {
    PathParams GetRelationByEnsgidPathParams 
    
}

type GetRelationByEnsgidResponse struct {
    ContentType string 
    StatusCode int64 
    
}

