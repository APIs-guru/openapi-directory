package operations

type NodesAddonReadPathParams struct {
	NodeID   string `pathParam:"style=simple,explode=false,name=node_id"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
}

type NodesAddonReadRequest struct {
	PathParams NodesAddonReadPathParams
}

type NodesAddonReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
