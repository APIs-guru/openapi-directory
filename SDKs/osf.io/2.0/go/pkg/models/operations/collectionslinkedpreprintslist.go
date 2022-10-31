package operations



type CollectionsLinkedPreprintsListPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsLinkedPreprintsListRequest struct {
    PathParams CollectionsLinkedPreprintsListPathParams 
    
}

type CollectionsLinkedPreprintsListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

