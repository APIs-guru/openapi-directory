package operations

type PutConsumerV1AppointmentsIDConfirmPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutConsumerV1AppointmentsIDConfirmQueryParams struct {
	Undo *bool `queryParam:"style=form,explode=true,name=undo"`
}

type PutConsumerV1AppointmentsIDConfirmRequest struct {
	PathParams  PutConsumerV1AppointmentsIDConfirmPathParams
	QueryParams PutConsumerV1AppointmentsIDConfirmQueryParams
}

type PutConsumerV1AppointmentsIDConfirmResponse struct {
	ContentType string
	StatusCode  int64
}
