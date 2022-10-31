package operations

type NodesContributorsReadPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type NodesContributorsReadRequest struct {
	PathParams NodesContributorsReadPathParams
}

type NodesContributorsReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
