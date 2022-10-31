package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams struct {
    Closed bool `pathParam:"style=simple,explode=false,name=closed"`
    HolidayID string `pathParam:"style=simple,explode=false,name=holidayId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest struct {
    PathParams PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams 
    
}

type PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

