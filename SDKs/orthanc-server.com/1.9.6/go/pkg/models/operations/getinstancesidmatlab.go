package operations

type GetInstancesIDMatlabPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDMatlabRequest struct {
	PathParams GetInstancesIDMatlabPathParams
}

type GetInstancesIDMatlabResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
