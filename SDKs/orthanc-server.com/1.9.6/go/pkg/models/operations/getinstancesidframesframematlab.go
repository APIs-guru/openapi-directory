package operations

type GetInstancesIDFramesFrameMatlabPathParams struct {
	Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
	ID    string  `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFramesFrameMatlabRequest struct {
	PathParams GetInstancesIDFramesFrameMatlabPathParams
}

type GetInstancesIDFramesFrameMatlabResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
