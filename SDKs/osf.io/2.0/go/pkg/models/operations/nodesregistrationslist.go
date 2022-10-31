package operations

type NodesRegistrationsListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesRegistrationsListRequest struct {
	PathParams NodesRegistrationsListPathParams
}

type NodesRegistrationsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
