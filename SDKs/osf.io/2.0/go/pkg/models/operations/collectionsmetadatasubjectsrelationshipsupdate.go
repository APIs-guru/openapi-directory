package operations

type CollectionsMetadataSubjectsRelationshipsUpdatePathParams struct {
	CgmID        string `pathParam:"style=simple,explode=false,name=cgm_id"`
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsMetadataSubjectsRelationshipsUpdateRequest struct {
	PathParams CollectionsMetadataSubjectsRelationshipsUpdatePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CollectionsMetadataSubjectsRelationshipsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
