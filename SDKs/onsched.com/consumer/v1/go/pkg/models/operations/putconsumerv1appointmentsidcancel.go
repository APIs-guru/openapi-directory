package operations

import (
	"openapi/pkg/models/shared"
)

type PutConsumerV1AppointmentsIDCancelPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutConsumerV1AppointmentsIDCancelRequest struct {
	PathParams PutConsumerV1AppointmentsIDCancelPathParams
}

type PutConsumerV1AppointmentsIDCancelResponse struct {
	AppointmentViewModel *shared.AppointmentViewModel
	ContentType          string
	StatusCode           int64
}
