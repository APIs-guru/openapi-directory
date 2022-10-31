package operations



type CollectionsLinkedNodesRelationshipsDeletePathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsLinkedNodesRelationshipsDeleteRequest struct {
    PathParams CollectionsLinkedNodesRelationshipsDeletePathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CollectionsLinkedNodesRelationshipsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

