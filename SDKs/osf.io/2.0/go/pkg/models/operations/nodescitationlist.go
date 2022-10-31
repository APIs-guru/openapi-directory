package operations

type NodesCitationListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesCitationListRequest struct {
	PathParams NodesCitationListPathParams
}

type NodesCitationListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
