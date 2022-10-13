package operations

type NodesAddonsListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesAddonsListRequest struct {
	PathParams NodesAddonsListPathParams
}

type NodesAddonsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
