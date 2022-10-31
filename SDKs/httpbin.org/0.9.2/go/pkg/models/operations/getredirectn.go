package operations

type GetRedirectNPathParams struct {
	N int64 `pathParam:"style=simple,explode=false,name=n"`
}

type GetRedirectNRequest struct {
	PathParams GetRedirectNPathParams
}

type GetRedirectNResponse struct {
	ContentType string
	StatusCode  int64
}
