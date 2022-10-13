package operations

type WikiReadPathParams struct {
	WikiID string `pathParam:"style=simple,explode=false,name=wiki_id"`
}

type WikiReadRequest struct {
	PathParams WikiReadPathParams
}

type WikiReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
