package operations



type CollectionsDetailPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsDetailRequest struct {
    PathParams CollectionsDetailPathParams 
    
}

type CollectionsDetailResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

