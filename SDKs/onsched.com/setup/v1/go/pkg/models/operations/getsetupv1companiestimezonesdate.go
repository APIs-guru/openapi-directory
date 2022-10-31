package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSetupV1CompaniesTimezonesDatePathParams struct {
    Date time.Time `pathParam:"style=simple,explode=false,name=date"`
    
}

type GetSetupV1CompaniesTimezonesDateRequest struct {
    PathParams GetSetupV1CompaniesTimezonesDatePathParams 
    
}

type GetSetupV1CompaniesTimezonesDateResponse struct {
    ContentType string 
    StatusCode int64 
    TimezoneViewModel *shared.TimezoneViewModel 
    
}

