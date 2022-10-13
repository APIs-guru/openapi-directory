package operations

type CollectionsLinkedRegistrationsRelationshipsCreatePathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsLinkedRegistrationsRelationshipsCreateRequest struct {
	PathParams CollectionsLinkedRegistrationsRelationshipsCreatePathParams
}

type CollectionsLinkedRegistrationsRelationshipsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
