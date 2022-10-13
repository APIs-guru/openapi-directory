package operations

type CollectionsAddMetadataPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsAddMetadataRequest struct {
	PathParams CollectionsAddMetadataPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CollectionsAddMetadataResponse struct {
	ContentType string
	StatusCode  int64
}
