package operations

type NodesAddonsFoldersListPathParams struct {
	NodeID   string `pathParam:"style=simple,explode=false,name=node_id"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
}

type NodesAddonsFoldersListRequest struct {
	PathParams NodesAddonsFoldersListPathParams
}

type NodesAddonsFoldersListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
