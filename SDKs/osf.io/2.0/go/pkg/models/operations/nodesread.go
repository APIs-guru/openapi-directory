package operations

type NodesReadPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesReadRequest struct {
	PathParams NodesReadPathParams
}

type NodesReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
