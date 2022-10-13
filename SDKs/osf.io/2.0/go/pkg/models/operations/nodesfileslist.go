package operations

type NodesFilesListPathParams struct {
	NodeID   string `pathParam:"style=simple,explode=false,name=node_id"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
}

type NodesFilesListRequest struct {
	PathParams NodesFilesListPathParams
}

type NodesFilesListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
