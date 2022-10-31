package operations

type GetInstancesIDFramesFramePreviewPathParams struct {
	Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
	ID    string  `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFramesFramePreviewQueryParams struct {
	Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
}

type GetInstancesIDFramesFramePreviewHeaders struct {
	Accept *string `header:"style=simple,explode=false,name=Accept"`
}

type GetInstancesIDFramesFramePreviewRequest struct {
	PathParams  GetInstancesIDFramesFramePreviewPathParams
	QueryParams GetInstancesIDFramesFramePreviewQueryParams
	Headers     GetInstancesIDFramesFramePreviewHeaders
}

type GetInstancesIDFramesFramePreviewResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
