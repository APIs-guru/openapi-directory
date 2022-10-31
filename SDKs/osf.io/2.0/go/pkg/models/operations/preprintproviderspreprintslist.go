package operations



type PreprintProvidersPreprintsListPathParams struct {
    PreprintProviderID string `pathParam:"style=simple,explode=false,name=preprint_provider_id"`
    
}

type PreprintProvidersPreprintsListRequest struct {
    PathParams PreprintProvidersPreprintsListPathParams 
    
}

type PreprintProvidersPreprintsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

