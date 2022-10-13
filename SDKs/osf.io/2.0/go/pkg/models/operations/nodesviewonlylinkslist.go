package operations

type NodesViewOnlyLinksListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesViewOnlyLinksListRequest struct {
	PathParams NodesViewOnlyLinksListPathParams
}

type NodesViewOnlyLinksListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
