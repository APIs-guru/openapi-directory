package operations

type CollectionsMetadataRegistrationsListPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsMetadataRegistrationsListRequest struct {
	PathParams CollectionsMetadataRegistrationsListPathParams
}

type CollectionsMetadataRegistrationsListResponse struct {
	ContentType string
	StatusCode  int64
}
