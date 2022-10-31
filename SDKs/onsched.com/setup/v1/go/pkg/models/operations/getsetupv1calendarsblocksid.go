package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1CalendarsBlocksIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1CalendarsBlocksIDRequest struct {
    PathParams GetSetupV1CalendarsBlocksIDPathParams 
    
}

type GetSetupV1CalendarsBlocksIDResponse struct {
    CalendarBlockViewModel *shared.CalendarBlockViewModel 
    ContentType string 
    StatusCode int64 
    
}

