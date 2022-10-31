package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1LocationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1LocationsIDRequest struct {
    PathParams DeleteSetupV1LocationsIDPathParams 
    
}

type DeleteSetupV1LocationsIDResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

