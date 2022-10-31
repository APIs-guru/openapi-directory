package operations

import (
"openapi/pkg/models/shared")

type DcimRackReservationsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRackReservationsUpdateRequest struct {
    PathParams DcimRackReservationsUpdatePathParams 
    Request shared.WritableRackReservation `request:"mediaType=application/json"`
    
}

type DcimRackReservationsUpdateResponse struct {
    ContentType string 
    RackReservation *shared.RackReservation 
    StatusCode int64 
    
}

