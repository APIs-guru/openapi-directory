package operations

import (
"openapi/pkg/models/shared")

type DcimRackReservationsCreateRequest struct {
    Request shared.WritableRackReservation `request:"mediaType=application/json"`
    
}

type DcimRackReservationsCreateResponse struct {
    ContentType string 
    RackReservation *shared.RackReservation 
    StatusCode int64 
    
}

