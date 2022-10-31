package operations

type TraceStatusCodesPathParams struct {
	Codes string `pathParam:"style=simple,explode=false,name=codes"`
}

type TraceStatusCodesRequest struct {
	PathParams TraceStatusCodesPathParams
}

type TraceStatusCodesResponse struct {
	ContentType string
	StatusCode  int64
}
