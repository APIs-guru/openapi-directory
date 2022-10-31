package operations

type NodesProvidersReadPathParams struct {
	NodeID   string `pathParam:"style=simple,explode=false,name=node_id"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
}

type NodesProvidersReadRequest struct {
	PathParams NodesProvidersReadPathParams
}

type NodesProvidersReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
