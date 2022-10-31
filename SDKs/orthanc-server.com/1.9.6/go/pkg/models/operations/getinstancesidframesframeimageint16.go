package operations

type GetInstancesIDFramesFrameImageInt16PathParams struct {
	Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
	ID    string  `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFramesFrameImageInt16QueryParams struct {
	Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
}

type GetInstancesIDFramesFrameImageInt16Headers struct {
	Accept *string `header:"style=simple,explode=false,name=Accept"`
}

type GetInstancesIDFramesFrameImageInt16Request struct {
	PathParams  GetInstancesIDFramesFrameImageInt16PathParams
	QueryParams GetInstancesIDFramesFrameImageInt16QueryParams
	Headers     GetInstancesIDFramesFrameImageInt16Headers
}

type GetInstancesIDFramesFrameImageInt16Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
