package operations

type NodesDraftRegistrationsDeletePathParams struct {
	DraftID string `pathParam:"style=simple,explode=false,name=draft_id"`
	NodeID  string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesDraftRegistrationsDeleteRequest struct {
	PathParams NodesDraftRegistrationsDeletePathParams
}

type NodesDraftRegistrationsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
