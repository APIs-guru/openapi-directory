package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1CalendarsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1CalendarsIDRequest struct {
    PathParams GetSetupV1CalendarsIDPathParams 
    
}

type GetSetupV1CalendarsIDResponse struct {
    ContentType string 
    ScheduleViewModel *shared.ScheduleViewModel 
    StatusCode int64 
    
}

