package operations

type GetInstancesIDImageInt16PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDImageInt16QueryParams struct {
	Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
}

type GetInstancesIDImageInt16Headers struct {
	Accept *string `header:"style=simple,explode=false,name=Accept"`
}

type GetInstancesIDImageInt16Request struct {
	PathParams  GetInstancesIDImageInt16PathParams
	QueryParams GetInstancesIDImageInt16QueryParams
	Headers     GetInstancesIDImageInt16Headers
}

type GetInstancesIDImageInt16Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
