package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1AppointmentsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1AppointmentsIDRequest struct {
    PathParams GetSetupV1AppointmentsIDPathParams 
    
}

type GetSetupV1AppointmentsIDResponse struct {
    AppointmentViewModel *shared.AppointmentViewModel 
    ContentType string 
    StatusCode int64 
    
}

