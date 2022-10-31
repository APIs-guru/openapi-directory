package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resourceId"`
    
}

type PutSetupV1AppointmentsIDReassignResourceResourceIDRequest struct {
    PathParams PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams 
    
}

type PutSetupV1AppointmentsIDReassignResourceResourceIDResponse struct {
    AppointmentViewModel *shared.AppointmentViewModel 
    ContentType string 
    StatusCode int64 
    
}

