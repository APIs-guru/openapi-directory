package operations

type PatchDelayDelayPathParams struct {
	Delay int64 `pathParam:"style=simple,explode=false,name=delay"`
}

type PatchDelayDelayRequest struct {
	PathParams PatchDelayDelayPathParams
}

type PatchDelayDelayResponse struct {
	ContentType string
	StatusCode  int64
}
