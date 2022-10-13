package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1AppointmentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetConsumerV1AppointmentsIDRequest struct {
	PathParams GetConsumerV1AppointmentsIDPathParams
}

type GetConsumerV1AppointmentsIDResponse struct {
	AppointmentViewModel *shared.AppointmentViewModel
	ContentType          string
	StatusCode           int64
}
