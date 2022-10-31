package operations



type CollectionsCollectedMetadataPathParams struct {
    CgmID string `pathParam:"style=simple,explode=false,name=cgm_id"`
    CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
    
}

type CollectionsCollectedMetadataRequest struct {
    PathParams CollectionsCollectedMetadataPathParams 
    
}

type CollectionsCollectedMetadataResponse struct {
    ContentType string 
    StatusCode int64 
    
}

