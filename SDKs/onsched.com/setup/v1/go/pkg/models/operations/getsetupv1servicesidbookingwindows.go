package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ServicesIDBookingwindowsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesIDBookingwindowsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1ServicesIDBookingwindowsRequest struct {
	PathParams  GetSetupV1ServicesIDBookingwindowsPathParams
	QueryParams GetSetupV1ServicesIDBookingwindowsQueryParams
}

type GetSetupV1ServicesIDBookingwindowsResponse struct {
	BookingWindowViewModel *shared.BookingWindowViewModel
	ContentType            string
	StatusCode             int64
}
