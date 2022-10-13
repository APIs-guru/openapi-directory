package operations

type NodesViewOnlyLinksReadPathParams struct {
	LinkID string `pathParam:"style=simple,explode=false,name=link_id"`
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesViewOnlyLinksReadRequest struct {
	PathParams NodesViewOnlyLinksReadPathParams
}

type NodesViewOnlyLinksReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
