package operations



type CollectionsLinkedNodesRelationshipsPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsLinkedNodesRelationshipsRequest struct {
    PathParams CollectionsLinkedNodesRelationshipsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CollectionsLinkedNodesRelationshipsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

