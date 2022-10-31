package operations

type NodesContributorsDeletePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type NodesContributorsDeleteRequest struct {
	PathParams NodesContributorsDeletePathParams
}

type NodesContributorsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
