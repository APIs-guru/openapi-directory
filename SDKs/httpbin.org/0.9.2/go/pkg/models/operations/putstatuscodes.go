package operations

type PutStatusCodesPathParams struct {
	Codes string `pathParam:"style=simple,explode=false,name=codes"`
}

type PutStatusCodesRequest struct {
	PathParams PutStatusCodesPathParams
}

type PutStatusCodesResponse struct {
	ContentType string
	StatusCode  int64
}
