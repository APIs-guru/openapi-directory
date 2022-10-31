package operations

type GetTargetByEnsgidPathParams struct {
	Target string `pathParam:"style=simple,explode=false,name=target"`
}

type GetTargetByEnsgidRequest struct {
	PathParams GetTargetByEnsgidPathParams
}

type GetTargetByEnsgidResponse struct {
	ContentType string
	StatusCode  int64
}
