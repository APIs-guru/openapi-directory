package operations

type GetInstancesIDFramesFrameImageUint8PathParams struct {
	Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
	ID    string  `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFramesFrameImageUint8QueryParams struct {
	Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
}

type GetInstancesIDFramesFrameImageUint8Headers struct {
	Accept *string `header:"name=Accept"`
}

type GetInstancesIDFramesFrameImageUint8Request struct {
	PathParams  GetInstancesIDFramesFrameImageUint8PathParams
	QueryParams GetInstancesIDFramesFrameImageUint8QueryParams
	Headers     GetInstancesIDFramesFrameImageUint8Headers
}

type GetInstancesIDFramesFrameImageUint8Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
