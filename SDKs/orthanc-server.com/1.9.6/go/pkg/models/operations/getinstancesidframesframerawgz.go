package operations

type GetInstancesIDFramesFrameRawGzPathParams struct {
	Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
	ID    string  `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFramesFrameRawGzRequest struct {
	PathParams GetInstancesIDFramesFrameRawGzPathParams
}

type GetInstancesIDFramesFrameRawGzResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
