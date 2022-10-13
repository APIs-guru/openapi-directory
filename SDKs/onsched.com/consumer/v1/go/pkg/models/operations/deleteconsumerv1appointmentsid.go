package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConsumerV1AppointmentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteConsumerV1AppointmentsIDRequest struct {
	PathParams DeleteConsumerV1AppointmentsIDPathParams
}

type DeleteConsumerV1AppointmentsIDResponse struct {
	AppointmentViewModel *shared.AppointmentViewModel
	ContentType          string
	StatusCode           int64
}
