package operations

type CollectionsLinkedRegistrationsRelationshipsPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsLinkedRegistrationsRelationshipsRequest struct {
	PathParams CollectionsLinkedRegistrationsRelationshipsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CollectionsLinkedRegistrationsRelationshipsResponse struct {
	ContentType string
	StatusCode  int64
}
