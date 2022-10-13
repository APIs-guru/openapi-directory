package operations

type PostDelayDelayPathParams struct {
	Delay int64 `pathParam:"style=simple,explode=false,name=delay"`
}

type PostDelayDelayRequest struct {
	PathParams PostDelayDelayPathParams
}

type PostDelayDelayResponse struct {
	ContentType string
	StatusCode  int64
}
