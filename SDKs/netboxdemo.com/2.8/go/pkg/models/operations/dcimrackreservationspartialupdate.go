package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackReservationsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackReservationsPartialUpdateRequest struct {
	PathParams DcimRackReservationsPartialUpdatePathParams
	Request    shared.WritableRackReservationInput `request:"mediaType=application/json"`
}

type DcimRackReservationsPartialUpdateResponse struct {
	ContentType     string
	RackReservation *shared.RackReservation
	StatusCode      int64
}
