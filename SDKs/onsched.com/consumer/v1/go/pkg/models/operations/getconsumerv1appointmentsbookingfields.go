package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1AppointmentsBookingfieldsQueryParams struct {
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
}

type GetConsumerV1AppointmentsBookingfieldsRequest struct {
	QueryParams GetConsumerV1AppointmentsBookingfieldsQueryParams
}

type GetConsumerV1AppointmentsBookingfieldsResponse struct {
	BookingFieldListViewModel *shared.BookingFieldListViewModel
	ContentType               string
	StatusCode                int64
}
