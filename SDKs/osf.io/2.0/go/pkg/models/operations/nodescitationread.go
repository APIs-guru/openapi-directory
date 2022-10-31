package operations

type NodesCitationReadPathParams struct {
	NodeID  string `pathParam:"style=simple,explode=false,name=node_id"`
	StyleID string `pathParam:"style=simple,explode=false,name=style_id"`
}

type NodesCitationReadRequest struct {
	PathParams NodesCitationReadPathParams
}

type NodesCitationReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
