package operations

type DeleteApplicationPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type DeleteApplicationRequest struct {
	PathParams DeleteApplicationPathParams
}

type DeleteApplicationResponse struct {
	ContentType string
	StatusCode  int64
}
