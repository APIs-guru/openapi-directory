package operations

import (
	"openapi/pkg/models/shared"
)

type PostConsumerV1AppointmentsQueryParams struct {
	CompleteBooking *string `queryParam:"style=form,explode=true,name=completeBooking"`
}

type PostConsumerV1AppointmentsRequests struct {
	AppointmentInitialModel  *shared.AppointmentInitialModel `request:"mediaType=application/*+json"`
	AppointmentInitialModel1 *shared.AppointmentInitialModel `request:"mediaType=application/json"`
	AppointmentInitialModel2 *shared.AppointmentInitialModel `request:"mediaType=application/json-patch+json"`
	AppointmentInitialModel3 *shared.AppointmentInitialModel `request:"mediaType=text/json"`
}

type PostConsumerV1AppointmentsRequest struct {
	QueryParams PostConsumerV1AppointmentsQueryParams
	Request     *PostConsumerV1AppointmentsRequests
}

type PostConsumerV1AppointmentsResponse struct {
	AppointmentInitialViewModel *shared.AppointmentInitialViewModel
	ContentType                 string
	StatusCode                  int64
}
