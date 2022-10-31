package operations

type NodesNodeAddonUpdatePathParams struct {
	NodeID   string `pathParam:"style=simple,explode=false,name=node_id"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
}

type NodesNodeAddonUpdateRequest struct {
	PathParams NodesNodeAddonUpdatePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type NodesNodeAddonUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
