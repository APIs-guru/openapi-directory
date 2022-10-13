package operations

type CollectionsMetadataDetailPathParams struct {
	CgmID        string `pathParam:"style=simple,explode=false,name=cgm_id"`
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsMetadataDetailRequest struct {
	PathParams CollectionsMetadataDetailPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CollectionsMetadataDetailResponse struct {
	ContentType string
	StatusCode  int64
}
