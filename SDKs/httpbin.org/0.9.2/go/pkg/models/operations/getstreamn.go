package operations

type GetStreamNPathParams struct {
	N int64 `pathParam:"style=simple,explode=false,name=n"`
}

type GetStreamNRequest struct {
	PathParams GetStreamNPathParams
}

type GetStreamNResponse struct {
	ContentType string
	StatusCode  int64
}
