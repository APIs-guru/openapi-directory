package operations

type NodesLogsListPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesLogsListRequest struct {
	PathParams NodesLogsListPathParams
}

type NodesLogsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
