package operations

type DeleteAnythingAnythingPathParams struct {
	Anything string `pathParam:"style=simple,explode=false,name=anything"`
}

type DeleteAnythingAnythingRequest struct {
	PathParams DeleteAnythingAnythingPathParams
}

type DeleteAnythingAnythingResponse struct {
	ContentType string
	StatusCode  int64
}
