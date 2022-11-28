package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackReservationsCreateRequest struct {
	Request shared.WritableRackReservationInput `request:"mediaType=application/json"`
}

type DcimRackReservationsCreateResponse struct {
	ContentType     string
	RackReservation *shared.RackReservation
	StatusCode      int64
}
