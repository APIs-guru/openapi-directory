package operations

type CollectionsMetadataRegistrationsDetailPathParams struct {
	CgmID        string `pathParam:"style=simple,explode=false,name=cgm_id"`
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsMetadataRegistrationsDetailRequest struct {
	PathParams CollectionsMetadataRegistrationsDetailPathParams
}

type CollectionsMetadataRegistrationsDetailResponse struct {
	ContentType string
	StatusCode  int64
}
