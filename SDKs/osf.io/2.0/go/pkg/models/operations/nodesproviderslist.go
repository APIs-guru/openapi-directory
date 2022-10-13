package operations

type NodesProvidersListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesProvidersListRequest struct {
	PathParams NodesProvidersListPathParams
}

type NodesProvidersListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
