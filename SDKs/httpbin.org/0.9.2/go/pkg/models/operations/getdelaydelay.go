package operations

type GetDelayDelayPathParams struct {
	Delay int64 `pathParam:"style=simple,explode=false,name=delay"`
}

type GetDelayDelayRequest struct {
	PathParams GetDelayDelayPathParams
}

type GetDelayDelayResponse struct {
	ContentType string
	StatusCode  int64
}
