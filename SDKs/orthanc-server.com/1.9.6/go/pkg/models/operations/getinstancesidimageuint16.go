package operations

type GetInstancesIDImageUint16PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDImageUint16QueryParams struct {
	Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
}

type GetInstancesIDImageUint16Headers struct {
	Accept *string `header:"name=Accept"`
}

type GetInstancesIDImageUint16Request struct {
	PathParams  GetInstancesIDImageUint16PathParams
	QueryParams GetInstancesIDImageUint16QueryParams
	Headers     GetInstancesIDImageUint16Headers
}

type GetInstancesIDImageUint16Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
