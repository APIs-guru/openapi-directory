package operations



type CollectionsLinkedRegistrationsRelationshipsDeletePathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsLinkedRegistrationsRelationshipsDeleteRequest struct {
    PathParams CollectionsLinkedRegistrationsRelationshipsDeletePathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CollectionsLinkedRegistrationsRelationshipsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

