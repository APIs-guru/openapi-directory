package operations

type PostAnythingAnythingPathParams struct {
	Anything string `pathParam:"style=simple,explode=false,name=anything"`
}

type PostAnythingAnythingRequest struct {
	PathParams PostAnythingAnythingPathParams
}

type PostAnythingAnythingResponse struct {
	ContentType string
	StatusCode  int64
}
