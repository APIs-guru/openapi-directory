package operations



type PreprintProviderDetailPathParams struct {
    PreprintProviderID string `pathParam:"style=simple,explode=false,name=preprint_provider_id"`
    
}

type PreprintProviderDetailRequest struct {
    PathParams PreprintProviderDetailPathParams 
    
}

type PreprintProviderDetailResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

