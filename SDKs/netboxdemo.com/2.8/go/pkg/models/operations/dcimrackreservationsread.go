package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackReservationsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackReservationsReadRequest struct {
	PathParams DcimRackReservationsReadPathParams
}

type DcimRackReservationsReadResponse struct {
	ContentType     string
	RackReservation *shared.RackReservation
	StatusCode      int64
}
