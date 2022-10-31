package operations

type NodesIdentifiersListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesIdentifiersListRequest struct {
	PathParams NodesIdentifiersListPathParams
}

type NodesIdentifiersListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
