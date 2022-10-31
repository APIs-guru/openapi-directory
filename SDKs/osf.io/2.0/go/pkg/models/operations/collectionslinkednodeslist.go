package operations



type CollectionsLinkedNodesListPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsLinkedNodesListRequest struct {
    PathParams CollectionsLinkedNodesListPathParams 
    
}

type CollectionsLinkedNodesListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

