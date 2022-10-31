package operations

type PutDelayDelayPathParams struct {
	Delay int64 `pathParam:"style=simple,explode=false,name=delay"`
}

type PutDelayDelayRequest struct {
	PathParams PutDelayDelayPathParams
}

type PutDelayDelayResponse struct {
	ContentType string
	StatusCode  int64
}
