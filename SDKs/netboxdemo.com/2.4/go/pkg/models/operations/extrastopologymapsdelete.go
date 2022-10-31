package operations



type ExtrasTopologyMapsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasTopologyMapsDeleteRequest struct {
    PathParams ExtrasTopologyMapsDeletePathParams 
    
}

type ExtrasTopologyMapsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

