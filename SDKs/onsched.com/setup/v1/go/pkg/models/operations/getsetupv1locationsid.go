package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1LocationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1LocationsIDRequest struct {
    PathParams GetSetupV1LocationsIDPathParams 
    
}

type GetSetupV1LocationsIDResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

