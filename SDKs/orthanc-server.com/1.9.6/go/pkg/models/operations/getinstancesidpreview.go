package operations

type GetInstancesIDPreviewPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDPreviewQueryParams struct {
	Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
}

type GetInstancesIDPreviewHeaders struct {
	Accept *string `header:"style=simple,explode=false,name=Accept"`
}

type GetInstancesIDPreviewRequest struct {
	PathParams  GetInstancesIDPreviewPathParams
	QueryParams GetInstancesIDPreviewQueryParams
	Headers     GetInstancesIDPreviewHeaders
}

type GetInstancesIDPreviewResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
