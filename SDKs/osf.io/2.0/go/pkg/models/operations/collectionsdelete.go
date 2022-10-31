package operations

type CollectionsDeletePathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

type CollectionsDeleteRequest struct {
	PathParams CollectionsDeletePathParams
}

type CollectionsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
