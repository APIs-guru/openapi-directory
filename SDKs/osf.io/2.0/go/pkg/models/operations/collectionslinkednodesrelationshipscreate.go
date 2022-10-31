package operations

type CollectionsLinkedNodesRelationshipsCreatePathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsLinkedNodesRelationshipsCreateRequest struct {
	PathParams CollectionsLinkedNodesRelationshipsCreatePathParams
}

type CollectionsLinkedNodesRelationshipsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
