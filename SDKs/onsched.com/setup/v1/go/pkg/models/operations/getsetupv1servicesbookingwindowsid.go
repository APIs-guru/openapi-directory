package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ServicesBookingwindowsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesBookingwindowsIDRequest struct {
	PathParams GetSetupV1ServicesBookingwindowsIDPathParams
}

type GetSetupV1ServicesBookingwindowsIDResponse struct {
	BookingWindowViewModel *shared.BookingWindowViewModel
	ContentType            string
	StatusCode             int64
}
