package operations

type CollectionsMetadataSubjectsRelationshipsPathParams struct {
	CgmID        string `pathParam:"style=simple,explode=false,name=cgm_id"`
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsMetadataSubjectsRelationshipsRequest struct {
	PathParams CollectionsMetadataSubjectsRelationshipsPathParams
}

type CollectionsMetadataSubjectsRelationshipsResponse struct {
	ContentType string
	StatusCode  int64
}
