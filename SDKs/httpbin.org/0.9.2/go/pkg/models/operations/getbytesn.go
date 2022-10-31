package operations

type GetBytesNPathParams struct {
	N int64 `pathParam:"style=simple,explode=false,name=n"`
}

type GetBytesNRequest struct {
	PathParams GetBytesNPathParams
}

type GetBytesNResponse struct {
	ContentType string
	StatusCode  int64
}
