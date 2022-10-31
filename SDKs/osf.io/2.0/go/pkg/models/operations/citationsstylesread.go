package operations

type CitationsStylesReadPathParams struct {
	StyleID string `pathParam:"style=simple,explode=false,name=style_id"`
}

type CitationsStylesReadRequest struct {
	PathParams CitationsStylesReadPathParams
}

type CitationsStylesReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
