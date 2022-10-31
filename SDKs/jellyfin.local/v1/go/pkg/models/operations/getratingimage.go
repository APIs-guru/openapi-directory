package operations

type GetRatingImagePathParams struct {
	Name  string `pathParam:"style=simple,explode=false,name=name"`
	Theme string `pathParam:"style=simple,explode=false,name=theme"`
}

type GetRatingImageRequest struct {
	PathParams GetRatingImagePathParams
}

type GetRatingImageResponse struct {
	Body                                       []byte
	ContentType                                string
	GetRatingImage200ImageWildcardBinaryString []byte
	ProblemDetails                             map[string]interface{}
	StatusCode                                 int64
}
