package operations

type PreprintsCitationReadPathParams struct {
	PreprintID string `pathParam:"style=simple,explode=false,name=preprint_id"`
	StyleID    string `pathParam:"style=simple,explode=false,name=style_id"`
}

type PreprintsCitationReadRequest struct {
	PathParams PreprintsCitationReadPathParams
}

type PreprintsCitationReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
