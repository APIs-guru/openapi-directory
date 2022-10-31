package operations

type CollectionsLinkedRegistrationsListPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsLinkedRegistrationsListRequest struct {
	PathParams CollectionsLinkedRegistrationsListPathParams
}

type CollectionsLinkedRegistrationsListResponse struct {
	ContentType string
	StatusCode  int64
}
