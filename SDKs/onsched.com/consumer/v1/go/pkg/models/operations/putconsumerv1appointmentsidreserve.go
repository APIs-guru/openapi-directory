package operations

import (
	"openapi/pkg/models/shared"
)

type PutConsumerV1AppointmentsIDReservePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutConsumerV1AppointmentsIDReserveQueryParams struct {
	SendNotifications *bool `queryParam:"style=form,explode=true,name=sendNotifications"`
}

type PutConsumerV1AppointmentsIDReserveRequests struct {
	AppointmentReserveModel  *shared.AppointmentReserveModel `request:"mediaType=application/*+json"`
	AppointmentReserveModel1 *shared.AppointmentReserveModel `request:"mediaType=application/json"`
	AppointmentReserveModel2 *shared.AppointmentReserveModel `request:"mediaType=application/json-patch+json"`
	AppointmentReserveModel3 *shared.AppointmentReserveModel `request:"mediaType=text/json"`
}

type PutConsumerV1AppointmentsIDReserveRequest struct {
	PathParams  PutConsumerV1AppointmentsIDReservePathParams
	QueryParams PutConsumerV1AppointmentsIDReserveQueryParams
	Request     *PutConsumerV1AppointmentsIDReserveRequests
}

type PutConsumerV1AppointmentsIDReserveResponse struct {
	ContentType string
	StatusCode  int64
}
