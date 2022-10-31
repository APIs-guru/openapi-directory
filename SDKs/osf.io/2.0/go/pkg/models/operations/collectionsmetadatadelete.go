package operations



type CollectionsMetadataDeletePathParams struct {
    CgmID string `pathParam:"style=simple,explode=false,name=cgm_id"`
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsMetadataDeleteRequest struct {
    PathParams CollectionsMetadataDeletePathParams 
    
}

type CollectionsMetadataDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

