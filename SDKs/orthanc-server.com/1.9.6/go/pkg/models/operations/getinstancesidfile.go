package operations

type GetInstancesIDFilePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDFileHeaders struct {
	Accept *string `header:"style=simple,explode=false,name=Accept"`
}

type GetInstancesIDFileRequest struct {
	PathParams GetInstancesIDFilePathParams
	Headers    GetInstancesIDFileHeaders
}

type GetInstancesIDFileResponse struct {
	Body                                             []byte
	ContentType                                      string
	GetInstancesIDFile200ApplicationDicomPlusJSONAny *interface{}
	StatusCode                                       int64
}
