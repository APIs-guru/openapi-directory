package operations

type GetStreamBytesNPathParams struct {
	N int64 `pathParam:"style=simple,explode=false,name=n"`
}

type GetStreamBytesNRequest struct {
	PathParams GetStreamBytesNPathParams
}

type GetStreamBytesNResponse struct {
	ContentType string
	StatusCode  int64
}
